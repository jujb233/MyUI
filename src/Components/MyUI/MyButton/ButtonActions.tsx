import React from "react";

const ButtonActions: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <span className="ml-2 flex items-center">{children}</span>
);

export default ButtonActions;
