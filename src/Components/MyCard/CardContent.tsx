import React from "react"
import clsx from "clsx"
import { useCardContext } from "./CardContext"

export const CardContent: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { contentClasses } = useCardContext()
    // 横向布局时内容自适应
    return (
        <div
            className={clsx(
                contentClasses,
                className
            )}
        >
            {children}
        </div>
    )
}

CardContent.displayName = "CardContent"
