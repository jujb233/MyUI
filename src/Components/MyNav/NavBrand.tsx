import React from "react"
import { useNavContext } from "./NavContext"

const NavBrand: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { classes } = useNavContext()
    return <div className={classes.brand}>{children}</div>
}

export default NavBrand
