import React from "react"

// ButtonIcon: 渲染按钮左侧的图标区域，负责图标的间距和垂直居中
const ButtonIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
    // 使用 flex 和 margin-right 保证图标与文本之间的间距一致
    <span className="mr-2 flex items-center">{icon}</span>
)

export default ButtonIcon
