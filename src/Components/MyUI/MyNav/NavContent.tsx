import React from "react";

const NavContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <div className="flex-1">{children}</div>;
};

export default NavContent;
