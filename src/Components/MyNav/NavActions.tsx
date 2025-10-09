import React from "react"

const NavActions: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="ml-auto flex items-center">{children}</div>
)

export default NavActions
