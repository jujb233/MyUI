import { SIZE_CONFIG, type VariantName, type ColorPresetName, type SizeName, type ShadowName, DEFAULT_STYLES, buildInteractionClasses } from "../../../Styles";
import { useComponentStyle } from "../../../Hooks/useComponentStyle";
import clsx from "clsx";

export type UseMyButtonProps = {
    htmlType?: "button" | "submit" | "reset"; // 仅透传给组件，不参与样式计算
    variant?: VariantName;
    color?: ColorPresetName | string;
    size?: SizeName;
    disabled?: boolean;
    className?: string;
    glass?: boolean;
    shadow?: ShadowName;
};

export function useMyButton(props: UseMyButtonProps) {
    const {
        variant = "solid",
        color,
        size = "medium",
        disabled = false,
        className = "",
        glass = true,
        shadow = "sm",
    } = props;

    const sizeStyle = SIZE_CONFIG[size];

    // 按钮不需要边框样式由内联 style 控制，这里关闭 bordered
    const { style: themedStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered: false,
        shadow,
        elevationKind: "button",
        isCard: false,
    });

    const buttonStyle: React.CSSProperties = {
        ...themedStyle,
        ...(disabled && {
            background: DEFAULT_STYLES.disabled.background,
            color: DEFAULT_STYLES.disabled.color,
        }),
    } as React.CSSProperties;

    const buttonClasses = clsx(
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
        className
    );

    return {
        size,
        sizeStyle,
        buttonStyle,
        buttonClasses,
        disabled,
        glass,
    };
}
