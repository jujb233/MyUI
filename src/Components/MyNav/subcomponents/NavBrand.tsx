import React from "react"
import { useMyNav } from "../../../Hooks"
import { useNavContext } from "../MyNav"
import { MyTitle } from "../../Parts"

const NavBrand: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const context = useNavContext()
    const classes = useMyNav(context)
    return (<MyTitle level={4} className={classes.brand}>{children}</MyTitle>)
}

export default NavBrand
