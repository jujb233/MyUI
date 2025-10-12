import React from "react";
import { useMyNav } from "../../../Hooks";
import { useNavContext } from "../MyNav";

const NavMenu: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const context = useNavContext();
    const classes = useMyNav(context);
    return <ul className={classes.menu}>{children}</ul>;
};

export default NavMenu
