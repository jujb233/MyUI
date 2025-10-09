import React from "react"
import clsx from "clsx"
import { useCardContext } from "./CardContext"

export const CardContent: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { sizeConfig, isHorizontal } = useCardContext() as any
    // 横向布局时内容自适应
    return (
        <div
            className={clsx(
                'text-[var(--text)]/85',
                sizeConfig.contentSize,
                isHorizontal ? 'flex-1 min-w-0' : '',
                className
            )}
        >
            {children}
        </div>
    )
}

CardContent.displayName = "CardContent"
