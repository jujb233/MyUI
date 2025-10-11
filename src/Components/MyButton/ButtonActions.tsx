import React from "react"
import { useButtonContext } from "./ButtonContext"

// ButtonActions: 渲染按钮右侧的附加操作区域（例如下拉箭头或操作按钮）
const ButtonActions: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const ctx = useButtonContext()
    if (!children) return null;
    // 使用来自 useMyButton 的槽位类名，回退到默认类
    const cls = ctx.classes?.slots?.actions || "ml-2 flex items-center"
    return <span className={cls}>{children}</span>;
};

export default ButtonActions
