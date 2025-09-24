import React from "react";
import clsx from "clsx";
import {
    SIZE_CONFIG,
    DEFAULT_STYLES,
    SHADOWS,
    VARIANT_BEHAVIORS,
    useComponentTheme,
    buildInteractionClasses,
    type VariantName,
    type ColorPresetName,
    type SizeName,
} from "../../../Styles";
import { ButtonProvider } from "./Context";
import ButtonContent from "./ButtonContent";
import ButtonIcon from "./ButtonIcon";
import ButtonActions from "./ButtonActions";

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
    shadow?: keyof typeof SHADOWS;
    icon?: React.ReactNode;
    actions?: React.ReactNode;
};

function MyButton({
    htmlType = "button",
    variant = "normal",
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
    const sizeStyle = SIZE_CONFIG[size];
    const { style: themedStyle } = useComponentTheme({ variant, color, glass, shadow, disabled, elevationKind: 'button' });
    const buttonStyle: React.CSSProperties = {
        ...themedStyle,
        ...(disabled && {
            background: DEFAULT_STYLES.disabled.background,
            color: DEFAULT_STYLES.disabled.color,
        }),
    };
    const variantBehavior = VARIANT_BEHAVIORS[variant]?.button?.classes;

    return (
        <ButtonProvider value={{ variant, color, size, glass, shadow, disabled }}>
            <button
                type={htmlType}
                disabled={disabled}
                onClick={onClick}
                className={clsx(
                    sizeStyle.padding,
                    sizeStyle.fontSize,
                    sizeStyle.minWidth,
                    "inline-flex items-center justify-center select-none relative overflow-hidden",
                    "rounded-xl font-semibold tracking-wide border border-transparent",
                    "transition-all duration-200 ease-out will-change-transform",
                    glass
                        ? '[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)] border-[var(--glass-border)]'
                        : '[background:var(--bg)] hover:[background:var(--bg-hover)] border-[var(--border)]',
                    'text-[var(--text)]',
                    buildInteractionClasses({ kind: 'button', enabled: !disabled }),
                    "disabled:opacity-60 disabled:cursor-not-allowed",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                    glass && !disabled && "backdrop-blur-md border",
                    variantBehavior,
                    className
                )}
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
