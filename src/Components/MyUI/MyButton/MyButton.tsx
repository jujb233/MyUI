import React from "react";
import { type SizeName } from "../../../Options";
import { ButtonProvider } from "./ButtonContext";
import ButtonContent from "./ButtonContent";
import ButtonIcon from "./ButtonIcon";
import ButtonActions from "./ButtonActions";
import { useMyButton } from "../Hooks/useMyButton";
import type {
    ThemeableProps,
    StylableProps,
    DisableableProps,
    PressableProps,
    WithIconProps,
    WithActionsProps,
    HtmlTypeProp,
} from "../Interfase";

export type MyButtonProps =
    ThemeableProps &
    StylableProps &
    DisableableProps &
    PressableProps<HTMLButtonElement> &
    WithIconProps &
    WithActionsProps &
    HtmlTypeProp & {
        children?: React.ReactNode;
    };

function MyButton({
    htmlType = "button",
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
}: MyButtonProps) {
    const { buttonStyle, buttonClasses } = useMyButton({ variant, size, glass, shadow, disabled, className });

    return (
        <ButtonProvider value={{ variant, size, glass, shadow, disabled }}>
            <button
                type={htmlType}
                disabled={disabled}
                onClick={onClick}
                className={buttonClasses}
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
