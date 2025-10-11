import React, { createContext, useContext } from "react"

export type NavContextType = {
    classes: {
        nav: string
        brand: string
        content: string
        menu: string
        actions: string
    }
}

const NavContext = createContext<NavContextType | undefined>(undefined)

export const useNavContext = () => {
    const ctx = useContext(NavContext)
    if (!ctx) throw new Error("useNavContext must be used within a NavProvider")
    return ctx
}

export const NavProvider: React.FC<{ value: NavContextType; children: React.ReactNode }> = ({ value, children }) => (
    <NavContext.Provider value={value}>{children}</NavContext.Provider>
)
