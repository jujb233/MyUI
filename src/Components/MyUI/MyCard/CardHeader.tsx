import React from "react"
import clsx from "clsx"
import { useCardContext } from "./CardContext"

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { sizeConfig } = useCardContext()
    return <h3 className={clsx('font-bold text-[var(--text)]', sizeConfig.titleSize, className)}>{children}</h3>
}

CardHeader.displayName = "CardHeader"
