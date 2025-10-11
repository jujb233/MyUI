import React from "react"
import { useButtonContext } from "./ButtonContext"

// ButtonIcon: 渲染按钮左侧的图标区域，负责图标的间距和垂直居中
const ButtonIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
    const ctx = useButtonContext()
    if (!icon) return null;
    // 使用来自 useMyButton 的槽位类名，回退到默认类
    const cls = ctx.classes?.slots?.icon || "mr-2 flex items-center"
    return <span className={cls}>{icon}</span>;
};

export default ButtonIcon
