import React from "react"

// ButtonActions: 渲染按钮右侧的附加操作区域（例如下拉箭头或操作按钮）
const ButtonActions: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    // ml-2 保证与主内容有间距，flex 与 items-center 用于垂直居中对齐
    <span className="ml-2 flex items-center">{children}</span>
)

export default ButtonActions
