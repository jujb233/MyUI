import { createContext, useContext, type Context } from 'solid-js'

type NullableContext<T> = Context<T | null>

type ContextRegistry = Record<string, NullableContext<unknown>>

type GlobalWithRegistry = typeof globalThis & {
    __MYUI_CONTEXT_REGISTRY__?: ContextRegistry
}

/**
 * 为复合组件创建 Context 和 Provider。
 * @param displayName - 用于调试的组件显示名称。
 * @returns [useContext, Provider, Context]
 */
export function createSubcomponentContext<T>(displayName: string) {
    // 为避免 HMR 或多版本导致的 Provider 类型不匹配，当本地存在已创建的 Context 时直接复用
    const globalTarget = globalThis as GlobalWithRegistry
    const registry = globalTarget.__MYUI_CONTEXT_REGISTRY__ ?? (globalTarget.__MYUI_CONTEXT_REGISTRY__ = {} as ContextRegistry)

    const existingContext = registry[displayName] as NullableContext<T> | undefined

    const context = existingContext ?? createContext<T | null>(null)

    if (!existingContext) {
        // 将新建的 Context 挂到 globalThis，确保刷新后子组件拿到同一个上下文实例
        registry[displayName] = context as NullableContext<unknown>
    }

    const useComponentContext = () => {
        const contextValue = useContext(context)
        if (contextValue === null) {
            throw new Error(`'use${displayName}Context' must be used within a <${displayName}.Provider>`)
        }
        return contextValue
    }

    return [useComponentContext, context.Provider, context] as const
}