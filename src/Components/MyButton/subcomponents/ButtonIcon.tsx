import React from "react";

// ButtonIcon: 渲染按钮左侧的图标区域，负责图标的间距和垂直居中
const ButtonIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
    if (!icon) return null;
    // TODO: Get classes from context or hook
    const cls = "mr-2 flex items-center";
    return <span className={cls}>{icon}</span>;
};

export default ButtonIcon
