import React from "react";

// ButtonContent: 按钮的主内容区域，负责文本内容自适应与文本截断
const ButtonContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    // TODO: Get classes from context or hook
    const cls = "flex-1 truncate";
    return <span className={cls}>{children}</span>;
};

export default ButtonContent
