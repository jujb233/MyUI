import React from "react";
import { useMyNav } from "../../../Hooks";
import { useNavContext } from "../MyNav";

const NavBrand: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const context = useNavContext();
    const classes = useMyNav(context);
    return <div className={classes.brand}>{children}</div>;
};

export default NavBrand
