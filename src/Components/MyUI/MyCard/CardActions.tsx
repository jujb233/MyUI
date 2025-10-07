import React from "react"
import clsx from "clsx"

export const CardActions: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={clsx("flex gap-2 mt-4", className)}>{children}</div>
)

CardActions.displayName = "CardActions"
