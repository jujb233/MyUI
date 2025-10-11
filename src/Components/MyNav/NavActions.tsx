import React from "react"
import { useNavContext } from "./NavContext"

const NavActions: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { classes } = useNavContext()
    return <div className={classes.actions}>{children}</div>
}

export default NavActions
