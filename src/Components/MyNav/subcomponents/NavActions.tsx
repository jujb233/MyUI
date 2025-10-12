import React from "react";
import { useMyNav } from "../../../Hooks";
import { useNavContext } from "../MyNav";

const NavActions: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const context = useNavContext();
    const classes = useMyNav(context);
    return <div className={classes.actions}>{children}</div>;
};

export default NavActions
