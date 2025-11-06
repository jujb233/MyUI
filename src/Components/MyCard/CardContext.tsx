import { createContext, useContext, type Component, splitProps } from "solid-js"
import type { IMyCardProps, IMyCardContext } from "./types"
import { CardImage } from "./subcomponents/CardImage"
import { useMyCard } from "../../Hooks"
import type { UseMyCardProps } from "../../Hooks/Components/useMyCard"

const MyCardContext = createContext<IMyCardContext | null>(null)

export const CardProvider: Component<IMyCardProps> = (props) => {
    const [local, others] = splitProps(props, ["backgroundImage", "onClick", "children", "clickable", "clickFocusable"])

    const {
        containerClasses,
        containerStyle,
        bodyClasses,
        ...rest
    } = useMyCard({ ...others, hasImage: !!local.backgroundImage } as UseMyCardProps)

    const contextValue: IMyCardContext = {
        // 仅保留与上下文相关的其余属性，避免将 children 等无关字段放入 Context
        ...others,
        size: rest.size,
        isHorizontal: rest.isHorizontal,
        imagePosition: rest.imagePosition as IMyCardContext['imagePosition'],
        sizeConfig: rest.sizeConfig,
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
        <MyCardContext.Provider value={contextValue}>
            <div
                class={containerClasses}
                style={containerStyle}
                onClick={local.onClick}
                role={local.clickFocusable ? 'button' : undefined}
                tabIndex={local.clickFocusable ? 0 : undefined}
            >
                {local.backgroundImage && <CardImage src={local.backgroundImage} />}
                <div class={bodyClasses}>
                    {local.children}
                </div>
            </div>
        </MyCardContext.Provider>
    )
}

export const useCardContext = () => {
    const context = useContext(MyCardContext)
    if (!context) {
        // 在没有 Provider 的情况下，返回一个安全的降级上下文，避免直接抛错导致整卡片渲染失败
        // 仅在开发环境提示一次
        try {
            // @ts-ignore
            if ((import.meta as any)?.env?.DEV) {
                // eslint-disable-next-line no-console
                console.warn("[MyUI] useCardContext() called outside of <MyCard> provider. Fallback styles will be used.")
            }
        } catch { /* no-op */ }

        const fallback = {
            // Theme/Style 基本兜底
            variant: undefined,
            size: 'medium',
            glass: true,
            shadow: 'md',
            className: '',
            id: undefined,
            // 布局/交互兜底
            bordered: true,
            direction: 'vertical',
            clickable: false,
            hover: false,
            onClick: undefined as any,
            // 插槽/内容能力兜底
            title: undefined,
            footer: undefined,
            backgroundImage: '',
            imagePosition: 'top',
            // 计算值兜底
            isHorizontal: false,
            sizeConfig: {
                spacing: 'space-y-3',
                titleSize: 'text-xl',
                contentSize: 'text-base',
                borderRadius: 'rounded-xl',
                minHeight: 'min-h-40',
            },
            imageClasses: '',
            headerClasses: '',
            titleClasses: '',
            contentClasses: '',
            footerClasses: '',
            actionsClasses: '',
            tagsContainerClasses: '',
            tagClasses: '',
            animation: undefined,
        } as unknown as IMyCardContext

        return fallback
    }
    return context
}
