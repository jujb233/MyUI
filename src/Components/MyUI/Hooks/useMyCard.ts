import { SIZE_CONFIG, type ComponentVariant, type SizeName, type ShadowName, VARIANT_ROLE_STYLES } from "../../../Options";
import { useComponentStyle } from "../../../Hooks/useComponentStyle";
import { useComponentClasses } from "../../../Hooks/useComponentClasses";
import { useCardLayout } from "../../../Hooks/useCardLayout";

export type UseMyCardProps = {
    variant?: ComponentVariant;
    size?: SizeName;
    glass?: boolean;
    clickable?: boolean;
    className?: string;
    bordered?: boolean;
    shadow?: ShadowName;
    imagePosition?: "top" | "left" | "right" | "background";
    direction?: "vertical" | "horizontal";
    hoverable?: boolean;
    hasImage?: boolean;
};

export function useMyCard(props: UseMyCardProps) {
    const {
        variant: variantProp,
        size = "medium",
        glass = true,
        clickable = false,
        className = "",
        bordered = true,
        shadow = "md",
        imagePosition = "top",
        direction = "vertical",
        hoverable = true,
        hasImage = false,
    } = props;

    const role = variantProp?.role || 'primary';
    const color = variantProp?.color || 'blue';
    const variant = VARIANT_ROLE_STYLES[role] as any;

    const sizeConfig = SIZE_CONFIG[size];
    const { style: cardStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered,
        shadow,
        elevationKind: "card",
    });
    const { isHorizontal } = useCardLayout({ direction, imagePosition, hasImage });
    const { containerClasses } = useComponentClasses({
        baseClass: "my-card",
        direction,
        imagePosition,
        sizeConfig,
        glass,
        hoverable,
        clickable,
        className,
        bordered,
        interactionEnabled: true,
    });
    const bodyClasses = [
        "my-card-body",
        sizeConfig.padding,
        sizeConfig.spacing,
        isHorizontal ? "flex-1" : "",
        imagePosition === "background" ? "relative z-10" : ""
    ].filter(Boolean).join(" ");

    return {
        size,
        sizeConfig,
        cardStyle,
        containerClasses,
        // 统一命名别名
        rootStyle: cardStyle,
        rootClasses: containerClasses,
        bodyClasses,
        isHorizontal,
        imagePosition,
    };
}
