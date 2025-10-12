import React from "react"
import clsx from "clsx"
import { useCardContext } from "../MyCard";

export const CardActions: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { actionsClasses } = useCardContext()
    return <div className={clsx(actionsClasses, className)}>{children}</div>
}

CardActions.displayName = "CardActions"
