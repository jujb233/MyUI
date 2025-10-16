import { createContext, useContext } from 'react'

/**
 * 为复合组件创建 Context 和 Provider。
 * @param displayName - 用于调试的组件显示名称。
 * @returns [useContext, Provider, Context]
 */
export function createSubcomponentContext<T>(displayName: string) {
    // 1. 创建 Context
    const Context = createContext<T | null>(null)
    Context.displayName = `${displayName}Context`

    // 2. 创建一个自定义 Hook 用于消费 Context
    const useComponentContext = () => {
        const contextValue = useContext(Context)
        if (contextValue === null) {
            // 保持运行时错误消息不变（仅翻译注释）
            throw new Error(`'use${displayName}Context' must be used within a <${displayName}.Provider>`)
        }
        return contextValue
    }

    // 3. 返回自定义 Hook、Provider 和 Context 本身
    return [useComponentContext, Context.Provider, Context] as const
}
