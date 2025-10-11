import React, {
    Component,
    type ErrorInfo,
    type ReactNode,
    useRef,
    useCallback,
    useMemo,
    useEffect,
} from "react"

// 一个小型的本地 context，方便消费者访问最近的边界状态
export type ErrorBoundaryContextType = {
    // 读取最近边界实例当前错误的 getter
    getError: () => Error | null
    resetError: () => void
    throwError: (error: unknown) => void
}

const ErrorBoundaryContext = React.createContext<ErrorBoundaryContextType | null>(null)

type FallbackRenderProps = { error: Error; resetError: () => void }

type ErrorBoundaryProps = {
    children: ReactNode
    // fallback 选项：渲染 props、组件或节点
    fallback?: ReactNode
    FallbackComponent?: React.ComponentType<FallbackRenderProps>
    fallbackRender?: (props: FallbackRenderProps) => ReactNode
    // 捕获到错误时调用
    onError?: (error: Error, info?: ErrorInfo) => void
    // 调用 reset 时触发
    onReset?: () => void
    // 当 resetKeys 中的任意值变化时，边界会重置
    resetKeys?: unknown[]
}

type InnerState = {
    error: Error | null
    errorInfo?: ErrorInfo | null
}

/**
 * 内部基于类的边界：React 目前要求用类来捕获错误。
 * 我们将其保持为内部实现，并暴露一个函数式包装器和 hooks。
 */
class InnerErrorBoundary extends Component<
    Omit<ErrorBoundaryProps, "children"> & { children?: ReactNode },
    InnerState
> {
    public override state: InnerState = { error: null, errorInfo: null }

    public static getDerivedStateFromError(error: Error): InnerState {
        return { error, errorInfo: null }
    }

    public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // 保存 errorInfo 并调用外部钩子
        this.setState({ error, errorInfo })
        try {
            this.props.onError?.(error, errorInfo)
        } catch (e) {
            // 吞掉异常以避免死循环
            // eslint-disable-next-line no-console
            console.error("onError handler threw:", e)
        }
    }

    public handleError = (err: unknown) => {
        const error = err instanceof Error ? err : new Error(String(err))
        // 设置 state 以便渲染 fallback
        this.setState({ error, errorInfo: null })
        try {
            this.props.onError?.(error)
        } catch (e) {
            console.error("onError handler threw:", e)
        }
    }

    public reset = () => {
        this.setState({ error: null, errorInfo: null })
        try {
            this.props.onReset?.()
        } catch (e) {
            console.error("onReset handler threw:", e)
        }
    }

    public override render() {
        if (this.state.error) {
            const { fallback, FallbackComponent, fallbackRender } = this.props
            const renderProps = { error: this.state.error, resetError: this.reset }

            if (typeof fallbackRender === "function") return fallbackRender(renderProps)
            if (FallbackComponent) return <FallbackComponent {...renderProps} />
            if (fallback) return fallback as ReactNode

            return <h1>Something went wrong.</h1>
        }

        return this.props.children || null
    }
}

/**
 * 应用使用的函数式包装器。它创建 context 值并暴露
 * 一个 `throwError` 函数，允许任何子组件以编程方式触发边界
 * （对异步错误或 hooks 很有用）。
 */
export function ErrorBoundary(props: ErrorBoundaryProps) {
    const { children, resetKeys } = props

    const boundaryRef = useRef<InnerErrorBoundary | null>(null)

    // memo 化的 context 值，避免消费者不必要的重新渲染
    const context = useMemo<ErrorBoundaryContextType>(() => {
        return {
            getError: () => boundaryRef.current ? (boundaryRef.current.state.error ?? null) : null,
            resetError: () => {
                boundaryRef.current?.reset()
            },
            throwError: (error: unknown) => {
                boundaryRef.current?.handleError(error)
            },
        }
    }, [])

    // 当 resetKeys 变化时重置
    useEffect(() => {
        if (!resetKeys) return
        boundaryRef.current?.reset()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, resetKeys ?? [])

    // 通过元素和 ref 将 props 克隆到内部类
    return (
        <ErrorBoundaryContext.Provider value={context}>
            <InnerErrorBoundary
                {...props}
                ref={(r) => {
                    // 保持实例，并通过读取 instance.state 保持 context.error 同步
                    boundaryRef.current = r
                }}
            >
                {children}
            </InnerErrorBoundary>
        </ErrorBoundaryContext.Provider>
    )
}

/**
 * 用于访问最近边界状态和控制函数的 hook。
 */
export function useErrorBoundary() {
    const ctx = React.useContext(ErrorBoundaryContext)
    if (!ctx) {
        // 提供安全默认值，使组件可以在没有边界时使用。
        return {
            hasError: false,
            error: null as Error | null,
            resetError: () => { },
            throwError: (e: unknown) => {
                // 如果没有边界，则抛出错误让 React 在控制台中显示
                throw e
            },
        }
    }

    const error = ctx.getError()

    return {
        hasError: Boolean(error),
        error,
        resetError: ctx.resetError,
        throwError: ctx.throwError,
    }
}

/**
 * 返回一个稳定函数的 hook，用于向最近的边界报告错误。
 * 示例：const handleError = useErrorHandler(); handleError(err)
 */
export function useErrorHandler() {
    const ctx = React.useContext(ErrorBoundaryContext)
    return useCallback(
        (error: unknown) => {
            if (ctx) {
                ctx.throwError(error)
                return
            }
            // 如果没有边界，则抛出错误以在渲染/生命周期中暴露错误
            throw error
        },
        [ctx]
    )
}

/**
 * HOC 便捷方法：用 ErrorBoundary 和 fallback 选项包裹组件。
 */
export function withErrorBoundary<P extends object>(
    ComponentToWrap: React.ComponentType<P>,
    boundaryProps?: Omit<ErrorBoundaryProps, "children">
) {
    return function Wrapped(props: P) {
        return (
            <ErrorBoundary {...(boundaryProps || {})}>
                <ComponentToWrap {...props} />
            </ErrorBoundary>
        )
    }
}

export default ErrorBoundary