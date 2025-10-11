import React from "react"
import clsx from "clsx"
import { useCardContext } from "./CardContext"

export const CardTags: React.FC<{ tags: React.ReactNode[]; className?: string }> = ({ tags, className }) => {
    const { tagsContainerClasses, tagClasses } = useCardContext()
    return (
        <div className={clsx(tagsContainerClasses, className)}>
            {tags.map((tag, index) => (
                <span
                    key={index}
                    className={tagClasses}
                >
                    {tag}
                </span>
            ))}
        </div>
    )
}


CardTags.displayName = "CardTags"
