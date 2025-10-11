import { createContext, useContext } from "react"
import type { MyButtonProps } from "./myButtonProps"

// ButtonContextType: 去掉不需要在 context 中传递的字段
export type ButtonContextType = Omit<MyButtonProps, "children" | "className" | "onClick">

// 创建 Context，初始为 undefined，以便在未包裹 Provider 时抛出友好错误
export const ButtonContext = createContext<ButtonContextType | undefined>(undefined)

// 自定义 hook：方便子组件读取按钮的上下文（variant/size/glass/shadow/disabled）
export const useButtonContext = () => {
    const ctx = useContext(ButtonContext)
    if (!ctx) throw new Error("useButtonContext must be used within a ButtonProvider")
    return ctx
}