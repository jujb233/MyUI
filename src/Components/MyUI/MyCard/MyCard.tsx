import React from "react";
import { useMyCard, type UseMyCardProps } from "../Hooks/useMyCard";
import ErrorBoundary from "../../Utils/ErrorBoundary";
import { CardContext, type CardContextType } from "./CardContext";
import { CardImage } from "./CardImage";

export type MyCardProps = UseMyCardProps & {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    children: React.ReactNode;
};

function CardRoot({
    children,
    onClick,
    ...props
}: MyCardProps) {
    const hasImage = React.Children.toArray(children).some(
        (child) => (child as React.ReactElement).type === CardImage
    );

    const {
        cardStyle,
        containerClasses,
        bodyClasses,
        ...rest
    } = useMyCard({ ...props, hasImage });

    const contextValue: CardContextType = {
        ...props,
        size: rest.size,
        isHorizontal: rest.isHorizontal,
        imagePosition: rest.imagePosition,
        sizeConfig: rest.sizeConfig,
    };

    // 筛选出非图片子元素
    const contentChildren = React.Children.toArray(children).filter(
        child => (child as React.ReactElement).type !== CardImage
    );
    // 筛选出图片子元素
    const imageChild = React.Children.toArray(children).find(
        child => (child as React.ReactElement).type === CardImage
    );

    const { isHorizontal, imagePosition } = rest;

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Card component failed to render.</div>}>
            <CardContext.Provider value={contextValue}>
                <div
                    className={containerClasses}
                    style={cardStyle}
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
    );
}

export default CardRoot;
