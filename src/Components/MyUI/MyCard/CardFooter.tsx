import React from "react"
import clsx from "clsx"
import { useCardContext } from "./CardContext"

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { sizeConfig } = useCardContext()
    return (
        <div className={clsx("card-footer mt-auto", sizeConfig.borderRadius.replace('rounded-', 'rounded-b-'), className)}>
            {children}
        </div>
    )
}

CardFooter.displayName = "CardFooter"
