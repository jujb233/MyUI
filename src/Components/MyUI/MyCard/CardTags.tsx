import React from "react"
import clsx from "clsx"

export const CardTags: React.FC<{ tags: React.ReactNode[]; className?: string }> = ({ tags, className }) => (
    <div className={clsx("flex flex-wrap gap-2 mb-3", className)}>
        {tags.map((tag, index) => (
            <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
            >
                {tag}
            </span>
        ))}
    </div>
)

CardTags.displayName = "CardTags"
