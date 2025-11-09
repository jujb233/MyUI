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
    const hookResult = useMyCard(enhancedProps as any)
    const { rootClass, rootStyle, slots, slotStyles, extras } = hookResult
    const imagePosition = extras?.imagePosition || 'top'
    const bodyClass = slots?.body || ''
    const bodyStyle = slotStyles?.body

    const contextValue: IMyCardContext = {
        ...props,
        // 保留原有 props
        ...props,
        // 注入 hook 补充信息
        isHorizontal: !!extras?.isHorizontal,
        imagePosition: imagePosition as any,
        sizeConfig: extras?.sizeConfig || ({} as any),
        slots: slots as any,
    }

    return (
        <ErrorCheck fallback={<div class="border border-red-500 p-4">Card component failed to render.</div>}>
            <CardProvider value={contextValue}>
                <div
                    class={rootClass}
                    style={rootStyle}
                    onClick={props.onClick}
                    data-role="mycard"
                >
                    {['left', 'top', 'background', 'center'].includes(imagePosition) && (
                        <CardImage src={(props as any).backgroundImage || ''} />
                    )}
                    <div class={bodyClass} style={bodyStyle}>{props.children}</div>
                    {['right', 'bottom'].includes(imagePosition) && (
                        <CardImage src={(props as any).backgroundImage || ''} />
                    )}
                </div>
            </CardProvider>
        </ErrorCheck>
    )
}

export default MyCard
