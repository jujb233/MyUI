import { ErrorCheck } from "../../Utils"
import { CardProvider } from "./CardContext"
import type { IMyCardProps, IMyCardContext } from "./types"
import { useMyCard } from "../../Hooks"
import { CardImage } from "./subcomponents/CardImage"

// Root MyCard component: now actually renders the card容器与背景图片
const MyCard = (props: IMyCardProps) => {
    // 当未显式传入 hasImage 时，自动依据 backgroundImage 推断
    // 由于类型定义中尚未正式声明 hasImage/backgroundImage，将其通过 any 透传给内部 Hook
    const enhancedProps = { ...props, hasImage: (props as any).hasImage ?? !!(props as any).backgroundImage } as any

    // 解析样式与插槽
    const { slots, containerClasses, containerStyle, bodyClasses, imagePosition, ...styles } = useMyCard(enhancedProps as any)

    const contextValue: IMyCardContext = {
        ...props,
        ...styles,
        // 将推断后的布局属性写入 context
        imagePosition,
        slots,
    }

    return (
        <ErrorCheck fallback={<div class="border border-red-500 p-4">Card component failed to render.</div>}>
            <CardProvider value={contextValue}>
                <div
                    class={containerClasses}
                    style={containerStyle}
                    onClick={props.onClick}
                    data-role="mycard"
                >
                    {['left', 'top', 'background', 'center'].includes(imagePosition) && (
                        <CardImage src={(props as any).backgroundImage || ''} />
                    )}
                    <div class={bodyClasses}>{props.children}</div>
                    {['right', 'bottom'].includes(imagePosition) && (
                        <CardImage src={(props as any).backgroundImage || ''} />
                    )}
                </div>
            </CardProvider>
        </ErrorCheck>
    )
}

export default MyCard
