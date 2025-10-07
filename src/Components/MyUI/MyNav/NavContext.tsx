import React, { createContext, useContext } from "react"
import type { MyNavProps } from "./Interface/myNavProps"

export type NavContextType = Omit<MyNavProps, "children" | "className">

const NavContext = createContext<NavContextType | undefined>(undefined)

export const useNavContext = () => {
    const ctx = useContext(NavContext)
    if (!ctx) throw new Error("useNavContext must be used within a NavProvider")
    return ctx
}

export const NavProvider: React.FC<{ value: NavContextType; children: React.ReactNode }> = ({ value, children }) => (
    <NavContext.Provider value={value}>{children}</NavContext.Provider>
)
