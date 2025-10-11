import React from "react"
import clsx from "clsx"
import { useCardContext } from "./CardContext"

export const CardFooter: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { footerClasses } = useCardContext()
    if (!children) return null
    return (
        <div
            className={clsx(
                footerClasses,
                className
            )}
        >
            {children}
        </div>
    )
}

CardFooter.displayName = "CardFooter"
