import React from "react";

const ButtonContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <span className="flex-1 truncate">{children}</span>;
};

export default ButtonContent;
