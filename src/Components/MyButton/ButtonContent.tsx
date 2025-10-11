import React from "react"
import { useButtonContext } from "./ButtonContext"

// ButtonContent: 按钮的主内容区域，负责文本内容自适应与文本截断
const ButtonContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const ctx = useButtonContext()
    // 使用来自 useMyButton 的槽位类名，回退到默认类
    const cls = ctx.classes?.slots?.content || "flex-1 truncate"
    return <span className={cls}>{children}</span>
}

export default ButtonContent
