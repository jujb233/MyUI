import React from "react"
import { useCardContext } from "./CardContext"

export const CardImage: React.FC<{ src: string; alt?: string }> = ({ src, alt = "" }) => {
    const { imagePosition, imageClasses } = useCardContext()

    if (imagePosition === "center") {
        // 使用绝对定位的 img 元素，避免行内 style 的 backgroundImage
        return (
            <div className={imageClasses}>
                <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover opacity-10" />
            </div>
        )
    }
    return <img src={src} alt={alt} className={imageClasses} />
}

CardImage.displayName = "CardImage"
