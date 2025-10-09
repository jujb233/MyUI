import React from "react"

const NavMenu: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <ul className="flex items-center space-x-4">{children}</ul>
}

export default NavMenu
