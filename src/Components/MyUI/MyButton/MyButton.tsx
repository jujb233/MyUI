import { type SizeName } from "../../../Options";
import { ButtonProvider } from "./ButtonContext";
import ButtonContent from "./ButtonContent";
import ButtonIcon from "./ButtonIcon";
import ButtonActions from "./ButtonActions";
import { useMyButton } from "../Hooks/useMyButton";
import { useAnimation } from "../Hooks/useAnimation";
import type { MyButtonProps } from "./Interface/myButtonProps";

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
    const { buttonStyle, buttonClasses } = useMyButton({ variant, size, glass, shadow, disabled, className });
    const animationClasses = useAnimation(animation);
    const classes = [buttonClasses, animationClasses].filter(Boolean).join(" ");

    return (
        <ButtonProvider value={{ variant, size, glass, shadow, disabled }}>
            <button
                type={htmlType}
                disabled={disabled}
                onClick={onClick}
                className={classes}
                style={{ ...buttonStyle, ...(style || {}) }}
            >
                {icon && <ButtonIcon icon={icon} />}
                <ButtonContent>{children}</ButtonContent>
                {actions && <ButtonActions>{actions}</ButtonActions>}
            </button>
        </ButtonProvider>
    );
}

export default MyButton;
