import React from "react";

// ButtonActions: 渲染按钮右侧的附加操作区域（例如下拉箭头或操作按钮）
const ButtonActions: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    if (!children) return null;
    // TODO: Get classes from context or hook
    const cls = "ml-2 flex items-center";
    return <span className={cls}>{children}</span>;
};

export default ButtonActions
