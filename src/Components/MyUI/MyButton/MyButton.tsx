import React from "react";
import {
    type ComponentVariant,
    type SizeName,
    type ShadowName,
} from "../../../Options";
import { ButtonProvider } from "./ButtonContext";
import ButtonContent from "./ButtonContent";
import ButtonIcon from "./ButtonIcon";
import ButtonActions from "./ButtonActions";
import { useMyButton } from "../Hooks/useMyButton";

export type MyButtonProps = {
    htmlType?: "button" | "submit" | "reset";
    variant?: ComponentVariant;
    size?: SizeName;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
    className?: string;
    glass?: boolean;
    shadow?: ShadowName;
    icon?: React.ReactNode;
    actions?: React.ReactNode;
};

function MyButton({
    htmlType = "button",
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
}: MyButtonProps) {
    const { buttonStyle, buttonClasses } = useMyButton({ variant, size, glass, shadow, disabled, className });

    return (
        <ButtonProvider value={{ variant, size, glass, shadow, disabled }}>
            <button
                type={htmlType}
                disabled={disabled}
                onClick={onClick}
                className={buttonClasses}
                style={buttonStyle}
            >
                {icon && <ButtonIcon icon={icon} />}
                <ButtonContent>{children}</ButtonContent>
                {actions && <ButtonActions>{actions}</ButtonActions>}
            </button>
        </ButtonProvider>
    );
}

export default MyButton;
