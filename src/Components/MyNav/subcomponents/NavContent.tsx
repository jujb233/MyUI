import React from "react";
import { useMyNav } from "../../../Hooks";
import { useNavContext } from "../MyNav";

const NavContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const context = useNavContext();
    const classes = useMyNav(context);
    return <div className={classes.content}>{children}</div>;
};

export default NavContent
