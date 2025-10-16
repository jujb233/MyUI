import React from 'react'
import clsx from 'clsx'

export type MyTitleProps = {
    children?: React.ReactNode
    /** Heading level 1-6 (defaults to 3) */
    level?: 1 | 2 | 3 | 4 | 5 | 6
    className?: string
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const tagMap: Record<NonNullable<MyTitleProps['level']>, HeadingTag> = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
}

export const MyTitle: React.FC<MyTitleProps> = ({ children, level = 3, className }) => {
    if (!children) return null
    const Tag: React.ElementType = tagMap[level] ?? 'h3'
    return React.createElement(Tag, { className: clsx('myui-title', className) }, children)
}

export default MyTitle
