import { type SizeName } from "../../../Options"
import { ButtonProvider } from "./ButtonContext"
import ButtonContent from "./ButtonContent"
import ButtonIcon from "./ButtonIcon"
import ButtonActions from "./ButtonActions"
import { useMyButton } from "../Hooks/useMyButton"
import type { MyButtonProps } from "./Interface/myButtonProps"
import ErrorBoundary from "../Utils/ErrorBoundary"

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
    glass = true,
    shadow = "sm",
    icon,
    actions,
}: MyButtonProps) {
    // 仅通过 hook 计算最终 className
    const { buttonClasses } = useMyButton({ variant, size, glass, shadow, disabled, className })

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-2">Button component failed to render.</div>}>
            {/* 使用 Provider 将当前按钮的状态/风格传递给内部子组件 */}
            <ButtonProvider value={{ variant, size, glass, shadow, disabled }}>
                <button
                    type={htmlType}
                    disabled={disabled}
                    onClick={onClick}
                    className={buttonClasses}
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
