import { CARD_SIZE_CONFIG, type VariantName, type ColorPresetName, type CardSizeName, type ShadowName } from "../../../Styles";
import { useComponentStyle } from "../../../Hooks/useComponentStyle";
import { useComponentClasses } from "../../../Hooks/useComponentClasses";
import { useCardLayout } from "../../../Hooks/useCardLayout";

export type UseMyCardProps = {
    variant?: VariantName;
    color?: ColorPresetName | string;
    size?: CardSizeName;
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
        variant = "normal",
        color,
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

    const sizeConfig = CARD_SIZE_CONFIG[size];
    const { style: cardStyle } = useComponentStyle({
        variant,
        color,
        glass,
        bordered,
        shadow,
        isCard: true,
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
        interactionKind: "card",
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
        bodyClasses,
        isHorizontal,
        imagePosition,
    };
}
