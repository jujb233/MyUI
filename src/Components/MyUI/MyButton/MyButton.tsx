import React from "react";
import {
    VARIANT_BEHAVIORS,
    type VariantName,
    type ColorPresetName,
    type SizeName,
    type ShadowName,
} from "../../../Styles";
import { ButtonProvider } from "./Context";
import ButtonContent from "./ButtonContent";
import ButtonIcon from "./ButtonIcon";
import ButtonActions from "./ButtonActions";
import { useMyButton } from "../Hooks/useMyButton";

export type MyButtonProps = {
    htmlType?: "button" | "submit" | "reset";
    variant?: VariantName;
    color?: ColorPresetName | string;
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
    variant = "solid",
    color,
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
    const { buttonStyle, buttonClasses } = useMyButton({ variant, color, size, glass, shadow, disabled, className });
    const variantBehavior = VARIANT_BEHAVIORS[variant]?.button?.classes;

    return (
        <ButtonProvider value={{ variant, color, size, glass, shadow, disabled }}>
            <button
                type={htmlType}
                disabled={disabled}
                onClick={onClick}
                className={[buttonClasses, variantBehavior].filter(Boolean).join(" ")}
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
