// 背景图子组件 props 类型
type MyPanelBackgroundProps = {
    // 明确允许 undefined，以兼容严格的 exactOptionalPropertyTypes 配置
    backgroundImage?: string | undefined
    className?: string | undefined
}

export function PanelBackground(props: MyPanelBackgroundProps) {
    const { backgroundImage, className } = props
    if (!backgroundImage) return null
    return (
        <img
            src={backgroundImage}
            alt=""
            aria-hidden
            className={className}
        />
    )
}