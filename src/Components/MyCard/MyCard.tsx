import React from "react"
import { useMyCard } from "../../Hooks"
import ErrorBoundary from "../../Utils/ErrorBoundary"
import { CardContext, type CardContextType } from "./CardContext"
import type { MyCardProps } from "./myCardProps"
import { CardImage } from "./CardImage"


function MyCard({
    variant,
    backgroundImage,
    onClick,
    children,
    ...props
}: MyCardProps & { children?: React.ReactNode }) {
    const {
        containerClasses,
        bodyClasses,
        ...rest
    } = useMyCard({ ...props, hasImage: !!backgroundImage })

    const contextValue: CardContextType = {
        ...props,
        size: rest.size,
        isHorizontal: rest.isHorizontal,
        imagePosition: rest.imagePosition as CardContextType['imagePosition'],
        sizeConfig: rest.sizeConfig,
        // sub-component classes
        imageClasses: rest.imageClasses,
        headerClasses: rest.headerClasses,
        titleClasses: rest.titleClasses,
        contentClasses: rest.contentClasses,
        footerClasses: rest.footerClasses,
        actionsClasses: rest.actionsClasses,
        tagsContainerClasses: rest.tagsContainerClasses,
        tagClasses: rest.tagClasses,
    }

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-4">Card component failed to render.</div>}>
            <CardContext.Provider value={contextValue}>
                <div
                    className={containerClasses}
                    onClick={onClick}
                    role={props.clickable ? 'button' : undefined}
                    tabIndex={props.clickable ? 0 : undefined}
                >
                    {backgroundImage && <CardImage src={backgroundImage} />}
                    <div className={bodyClasses}>
                        {children}
                    </div>
                </div>
            </CardContext.Provider>
        </ErrorBoundary>
    );
}

export default MyCard
