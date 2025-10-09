import React from "react"
import { useMyCard } from "../../Hooks"
import ErrorBoundary from "../../Utils/ErrorBoundary"
import { CardContext, type CardContextType } from "./CardContext"
import { CardHeader } from "./CardHeader"
import { CardContent } from "./CardContent"
import { CardFooter } from "./CardFooter"
import type { MyCardProps } from "./myCardProps"


function MyCard({
    title,
    content,
    footer,
    backgroundImage,
    onClick,
    children,
    ...props
}: MyCardProps & {
    content?: React.ReactNode
}) {
    const {
        containerClasses,
        bodyClasses,
        ...rest
    } = useMyCard({ ...props, hasImage: !!backgroundImage });

    const contextValue: CardContextType = {
        ...props,
        size: rest.size,
        isHorizontal: rest.isHorizontal,
        imagePosition: rest.imagePosition,
        sizeConfig: rest.sizeConfig,
    };

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Card component failed to render.</div>}>
            <CardContext.Provider value={contextValue}>
                <div
                    className={containerClasses}
                    onClick={onClick}
                    role={props.clickable ? 'button' : undefined}
                    tabIndex={props.clickable ? 0 : undefined}
                >
                    {React.Children.count(children) > 0 ? (
                        children
                    ) : (
                        <>
                            {/* 兼容旧 API：当未提供 children 时，回退到 props 渲染 */}
                            <CardHeader>{title}</CardHeader>
                            <CardContent>{content}</CardContent>
                            {footer ? <CardFooter>{footer}</CardFooter> : null}
                        </>
                    )}
                </div>
            </CardContext.Provider>
        </ErrorBoundary>
    );
}

export default MyCard
