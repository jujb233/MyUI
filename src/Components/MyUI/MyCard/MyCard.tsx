import React from "react"
import { useMyCard } from "../Hooks/useMyCard"
import ErrorBoundary from "../Utils/ErrorBoundary"
import { CardContext, type CardContextType } from "./CardContext"
import { CardHeader } from "./CardHeader"
import { CardContent } from "./CardContent"
import { CardFooter } from "./CardFooter"
import type { MyCardProps } from "./Interface/myCardProps"

function MyCard({
    header,
    content,
    footer,
    image,
    onClick,
    ...props
}: MyCardProps & {
    header?: React.ReactNode
    content?: React.ReactNode
    footer?: React.ReactNode
    image?: React.ReactNode
}) {
    const hasImage = !!image
    const {
        containerClasses,
        bodyClasses,
        ...rest
    } = useMyCard({ ...props, hasImage })

    const contextValue: CardContextType = {
        ...props,
        size: rest.size,
        isHorizontal: rest.isHorizontal,
        imagePosition: rest.imagePosition,
        sizeConfig: rest.sizeConfig,
    }

    const { isHorizontal, imagePosition } = rest

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Card component failed to render.</div>}>
            <CardContext.Provider value={contextValue}>
                <div
                    className={containerClasses}
                    onClick={onClick}
                    role={props.clickable ? 'button' : undefined}
                    tabIndex={props.clickable ? 0 : undefined}
                >
                    {image && imagePosition === "background" && image}
                    {image && imagePosition === "top" && !isHorizontal && (
                        <div className="mb-4">{image}</div>
                    )}
                    {image && isHorizontal && (
                        <div className="flex-shrink-0">{image}</div>
                    )}
                    {header && <CardHeader>{header}</CardHeader>}
                    <div className={bodyClasses}>
                        {content && <CardContent>{content}</CardContent>}
                    </div>
                    {footer && <CardFooter>{footer}</CardFooter>}
                </div>
            </CardContext.Provider>
        </ErrorBoundary>
    )
}

export default MyCard
