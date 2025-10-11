import ButtonContent from "./ButtonContent"
import ButtonIcon from "./ButtonIcon"
import ButtonActions from "./ButtonActions"
import type { MyButtonProps } from "./myButtonProps"
import { ErrorBoundary } from "../../Utils"
import { useMyButton } from "../../Hooks"
import { ButtonContext } from "./ButtonContext"

function MyButton({
    buttonType: htmlType = "button",
    variant,
    size = "medium",
    disabled = false,
    onClick,
    children,
    className = "",
    glass = true,
    shadow = "sm",
    icon,
    actions,
    animation,
}: MyButtonProps) {
    // 通过 hook 计算最终 className
    const buttonClasses = useMyButton({ variant, size, glass, shadow, disabled, className, animation })

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-2">Button component failed to render.</div>}>
            {/* 使用 Provider 将当前按钮的状态/风格传递给内部子组件 */}
            <ButtonContext.Provider value={{ variant, size, glass, shadow, disabled }}>
                <button
                    type={htmlType}
                    disabled={disabled}
                    onClick={onClick}
                    className={buttonClasses}
                >
                    {/* 图标和 actions 的判断逻辑交给子组件内部 */}
                    <ButtonIcon icon={icon} />
                    <ButtonContent>{children}</ButtonContent>
                    <ButtonActions>{actions}</ButtonActions>
                </button>
            </ButtonContext.Provider>
        </ErrorBoundary>
    )
}

export default MyButton
