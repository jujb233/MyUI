import React from "react"
import clsx from "clsx"
import { useCardContext } from "./CardContext"

export const CardHeader: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className }) => {
    const { imagePosition, isHorizontal, backgroundImage, headerClasses, titleClasses } = useCardContext()

    // 渲染图片逻辑
    let imageNode: React.ReactNode = null
    if (backgroundImage) {
        if (imagePosition === "background") {
            imageNode = backgroundImage
        } else if (imagePosition === "top" && !isHorizontal) {
            imageNode = <div className="mb-4">{backgroundImage}</div>
        } else if (isHorizontal) {
            imageNode = <div className="flex-shrink-0 mr-4">{backgroundImage}</div>
        }
    }

    return (
        <div className={clsx(headerClasses, className)}>
            {imageNode}
            {children && (
                <h3 className={titleClasses}>{children}</h3>
            )}
        </div>
    )
}

CardHeader.displayName = "CardHeader"
