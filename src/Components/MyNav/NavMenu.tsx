import React from "react"
import { useNavContext } from "./NavContext"

const NavMenu: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { classes } = useNavContext()
    return <ul className={classes.menu}>{children}</ul>
}

export default NavMenu
