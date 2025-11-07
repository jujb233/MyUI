import {
    createContext,
    useContext,
    type JSX,
    type Component,
    catchError,
    createSignal,
    on,
    Show,
    Switch,
    Match,
} from 'solid-js'
import { isServer, Dynamic } from 'solid-js/web'

// 一个小型的本地 context，方便消费者访问最近的边界状态
export type ErrorCheckContextType = {
    // 读取最近边界实例当前错误的 getter
    error: () => Error | null
    reset: () => void
    throw: (error: unknown) => void
}

const ErrorCheckContext = createContext<ErrorCheckContextType | null>(null)

type FallbackRenderProps = { error: Error; resetError: () => void }

type ErrorCheckProps = {
    children: JSX.Element
    // fallback 选项：渲染 props、组件或节点
    fallback?: JSX.Element
    FallbackComponent?: Component<FallbackRenderProps>
    fallbackRender?: (props: FallbackRenderProps) => JSX.Element
    // 捕获到错误时调用
    onError?: (error: Error) => void
    // 调用 reset 时触发
    onReset?: () => void
    // 当 resetKeys 中的任意值变化时，边界会重置
    resetKeys?: unknown[]
}

/**
 * 应用使用的函数式包装器。它创建 context 值并暴露
 * 一个 `throw` 函数，允许任何子组件以编程方式触发边界
 * （对异步错误或 hooks 很有用）。
 */
export function ErrorCheck(props: ErrorCheckProps) {
    const [error, setError] = createSignal<Error | null>(null)

    const reset = () => {
        setError(null)
        props.onReset?.()
    }

    on(
        () => props.resetKeys,
        () => {
            if (!isServer) {
                reset()
            }
        },
        { defer: true }
    )

    const context: ErrorCheckContextType = {
        error,
        reset,
        throw: (err: unknown) => {
            const e = err instanceof Error ? err : new Error(String(err))
            setError(e)
        },
    }

    const fallbackProps = () => ({
        error: error()!,
        resetError: reset,
    })

    const children = catchError(
        () => props.children,
        (err) => {
            const e = err instanceof Error ? err : new Error(String(err))
            setError(e)
            props.onError?.(e)
        }
    )

    return (
        <ErrorCheckContext.Provider value={context}>
            <Show when={error()} fallback={children}>
                <Switch>
                    <Match when={typeof props.fallbackRender === 'function'}>
                        {props.fallbackRender!(fallbackProps())}
                    </Match>
                    <Match when={props.FallbackComponent}>
                        <Dynamic component={props.FallbackComponent!} {...fallbackProps()} />
                    </Match>
                    <Match when={props.fallback}>{props.fallback}</Match>
                    <Match when={true}>
                        <h1>Something went wrong.</h1>
                    </Match>
                </Switch>
            </Show>
        </ErrorCheckContext.Provider>
    )
}

/**
 * 用于访问最近边界状态和控制函数的 hook。
 */
export function useErrorBoundary() {
    const ctx = useContext(ErrorCheckContext)
    if (!ctx) {
        // 提供安全默认值，使组件可以在没有边界时使用。
        return {
            hasError: () => false,
            error: () => null,
            resetError: () => { },
            throwError: (e: unknown) => {
                // 如果没有边界，则抛出错误让 Solid 在控制台中显示
                throw e
            },
        }
    }

    return {
        hasError: () => Boolean(ctx.error()),
        error: ctx.error,
        resetError: ctx.reset,
        throwError: ctx.throw,
    }
}

/**
 * 返回一个稳定函数的 hook，用于向最近的边界报告错误。
 * 示例：const handleError = useErrorHandler(); handleError(err)
 */
export function useErrorHandler() {
    const ctx = useContext(ErrorCheckContext)
    return (error: unknown) => {
        if (ctx) {
            ctx.throw(error)
            return
        }
        // 如果没有边界，则抛出错误以在渲染/生命周期中暴露错误
        throw error
    }
}

/**
 * HOC 便捷方法：用 ErrorBoundary 和 fallback 选项包裹组件。
 */
export function withErrorBoundary<P extends object>(
    ComponentToWrap: Component<P>,
    boundaryProps?: Omit<ErrorCheckProps, 'children'>
) {
    return function Wrapped(props: P) {
        return (
            <ErrorCheck {...(boundaryProps || {})}>
                <ComponentToWrap {...props} />
            </ErrorCheck>
        )
    }
}

export default ErrorCheck