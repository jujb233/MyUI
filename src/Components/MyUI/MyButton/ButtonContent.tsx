import React from "react"

// ButtonContent: 按钮的主内容区域，负责文本内容自适应与文本截断
const ButtonContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    // 使用 flex-1 让内容占据剩余空间，truncate 保证长文本不换行溢出
    return <span className="flex-1 truncate">{children}</span>
}

export default ButtonContent
