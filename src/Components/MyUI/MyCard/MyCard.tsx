import React from "react"
import { useMyCard } from "../Hooks/useMyCard"
import { styleUtil } from "../Utils/styleBuilder"
import ErrorBoundary from "../Utils/ErrorBoundary"
import { CardContext, type CardContextType } from "./CardContext"
import { CardImage } from "./CardImage"
import type { MyCardProps } from "./Interface/myCardProps"

function CardRoot({
    children,
    onClick,
    ...props
}: MyCardProps) {
    const hasImage = React.Children.toArray(children).some(
        (child) => (child as React.ReactElement).type === CardImage
    )

    const {
        containerClasses,
        bodyClasses,
        ...rest
    } = useMyCard({ ...props, hasImage })

    // 解析动画类名
    const animationClasses = styleUtil.animationPropToClass(props.animation)

    const contextValue: CardContextType = {
        ...props,
        size: rest.size,
        isHorizontal: rest.isHorizontal,
        imagePosition: rest.imagePosition,
        sizeConfig: rest.sizeConfig,
    }

    // 筛选出非图片子元素
    const contentChildren = React.Children.toArray(children).filter(
        child => (child as React.ReactElement).type !== CardImage
    )
    // 筛选出图片子元素
    const imageChild = React.Children.toArray(children).find(
        child => (child as React.ReactElement).type === CardImage
    )

    const { isHorizontal, imagePosition } = rest

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Card component failed to render.</div>}>
            <CardContext.Provider value={contextValue}>
                <div
                    className={[containerClasses, animationClasses].filter(Boolean).join(" ")}
                    onClick={onClick}
                    role={props.clickable ? 'button' : undefined}
                    tabIndex={props.clickable ? 0 : undefined}
                >
                    {imageChild && imagePosition === "background" && imageChild}
                    {imageChild && imagePosition === "top" && !isHorizontal && (
                        <div className="mb-4">{imageChild}</div>
                    )}
                    {imageChild && isHorizontal && (
                        <div className="flex-shrink-0">{imageChild}</div>
                    )}

                    <div className={bodyClasses}>
                        {contentChildren}
                    </div>
                </div>
            </CardContext.Provider>
        </ErrorBoundary>
    )
}

export default CardRoot
