import { type SizeName } from "../../../Options"
import { ButtonProvider } from "./ButtonContext"
import ButtonContent from "./ButtonContent"
import ButtonIcon from "./ButtonIcon"
import ButtonActions from "./ButtonActions"
import { useMyButton } from "../Hooks/useMyButton"
import { useAnimation } from "../Hooks/useAnimation"
import type { MyButtonProps } from "./Interface/myButtonProps"
import ErrorBoundary from "../../Utils/ErrorBoundary"

// MyButton: 封装基础的按钮组件，组合样式、图标、内容和附加 actions
// 接受 variant/size/glass/shadow 等外部样式配置，并通过 context 传递给子组件

function MyButton({
    buttonType: htmlType = "button",
    variant,
    size = "medium" as SizeName,
    disabled = false,
    onClick,
    children,
    className = "",
    style,
    glass = true,
    shadow = "sm",
    icon,
    actions,
    animation,
}: MyButtonProps) {
    // 计算基础样式/类名（来自自定义 hook）
    const { buttonStyle, buttonClasses } = useMyButton({ variant, size, glass, shadow, disabled, className })
    // 计算动画相关的类名（如果有 animation 配置）
    const animationClasses = useAnimation(animation)
    // 合并最终的 className，过滤空值
    const classes = [buttonClasses, animationClasses].filter(Boolean).join(" ")

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-2">Button component failed to render.</div>}>
            {/* 使用 Provider 将当前按钮的状态/风格传递给内部子组件 */}
            <ButtonProvider value={{ variant, size, glass, shadow, disabled }}>
                <button
                    type={htmlType}
                    disabled={disabled}
                    onClick={onClick}
                    className={classes}
                    // 合并计算得到的样式与外部传入的 style
                    style={{ ...buttonStyle, ...(style || {}) }}
                >
                    {/* 可选图标（在左侧） */}
                    {icon && <ButtonIcon icon={icon} />}
                    {/* 主显示内容（文本/子节点） */}
                    <ButtonContent>{children}</ButtonContent>
                    {/* 可选的额外 actions（在右侧） */}
                    {actions && <ButtonActions>{actions}</ButtonActions>}
                </button>
            </ButtonProvider>
        </ErrorBoundary>
    )
}

export default MyButton
