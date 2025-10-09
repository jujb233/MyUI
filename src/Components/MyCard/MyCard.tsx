import React from "react"
import { useMyCard } from "../../Hooks"
import ErrorBoundary from "../../Utils/ErrorBoundary"
import { CardContext, type CardContextType } from "./CardContext"
// Card subcomponents intentionally not imported here; MyCard now requires children (composition only)
import type { MyCardProps } from "./myCardProps"


function MyCard({
    backgroundImage,
    onClick,
    children,
    ...props
}: MyCardProps & { children?: React.ReactNode }) {
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
                    {children}
                </div>
            </CardContext.Provider>
        </ErrorBoundary>
    );
}

export default MyCard
