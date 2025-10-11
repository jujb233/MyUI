import React from "react"
import { useNavContext } from "./NavContext"

const NavContent: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { classes } = useNavContext()
    return <div className={classes.content}>{children}</div>
}

export default NavContent
