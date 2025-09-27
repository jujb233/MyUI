import React from "react";

const NavBrand: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <div className="flex-shrink-0">{children}</div>;
};

export default NavBrand;
