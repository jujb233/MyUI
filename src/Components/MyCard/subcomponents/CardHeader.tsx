import React from "react"
import clsx from "clsx"
import { useCardContext } from "../MyCard";
import MyTitle from "../../Parts/myTitle/myTitle"

export const CardHeader: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { headerClasses, titleClasses } = useCardContext()

    // Header 仅负责展示标题或内联内容
    const imageNode: React.ReactNode = null

    return (
        <div className={clsx(headerClasses, className)}>
            {imageNode}
            {children && (
                <MyTitle level={3} className={titleClasses}>{children}</MyTitle>
            )}
        </div>
    )
}

CardHeader.displayName = "CardHeader"
