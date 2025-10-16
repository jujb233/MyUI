import { useMyCard } from "../../Hooks"
import ErrorBoundary from "../../Utils/ErrorBoundary"
import { createSubcomponentContext } from "../../Utils/componentFactory"
import type { IMyCardProps, IMyCardContext } from "./types"
import { CardImage } from "./subcomponents/CardImage"
import type { UseMyCardProps } from "../../Hooks/Components/useMyCard"

export const [useCardContext, CardProvider] = createSubcomponentContext<IMyCardContext>('MyCard')

function MyCard(props: IMyCardProps) {
    const {
        backgroundImage,
        onClick,
        children,
        ...restProps
    } = props

    const {
        containerClasses,
        bodyClasses,
        ...rest
    } = useMyCard({ ...restProps, hasImage: !!backgroundImage } as UseMyCardProps)

    const contextValue: IMyCardContext = {
        ...props,
        size: rest.size,
        isHorizontal: rest.isHorizontal,
        imagePosition: rest.imagePosition as IMyCardContext['imagePosition'],
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
            <CardProvider value={contextValue}>
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
            </CardProvider>
        </ErrorBoundary>
    )
}

export default MyCard
