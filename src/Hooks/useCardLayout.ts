/**
 * @description `useCardLayout` 的属性
 */
export type UseCardLayoutProps = {
    /**
     * @description 卡片的布局方向
     * @default "vertical"
     */
    direction?: "vertical" | "horizontal"
    /**
     * @description 图片的位置
     * @default "top"
     */
    imagePosition?: "top" | "left" | "right" | "background" | "bottom" | "center"
    /**
     * @description 是否有图片
     * @default false
     */
    hasImage?: boolean
}

/**
 * @description `MyCard` 组件的布局逻辑
 * @param props `useCardLayout` 的属性
 * @returns `isHorizontal` 是否为水平布局, `imagePosition` 图片的位置
 */
export function useCardLayout(props: UseCardLayoutProps) {
    const {
        direction = "vertical",
        imagePosition = "top",
        hasImage = false,
    } = props

    const isHorizontal = direction === "horizontal" && hasImage && imagePosition !== "top"
    return { isHorizontal, imagePosition }
}
