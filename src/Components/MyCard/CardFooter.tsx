import React from "react"
import clsx from "clsx"
import { useCardContext } from "./CardContext"

export const CardFooter: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { sizeConfig, isHorizontal } = useCardContext() as any
    if (!children) return null
    return (
        <div
            className={clsx(
                "card-footer mt-auto",
                sizeConfig.borderRadius.replace('rounded-', 'rounded-b-'),
                isHorizontal ? 'w-full' : '',
                className
            )}
        >
            {children}
        </div>
    )
}

CardFooter.displayName = "CardFooter"
