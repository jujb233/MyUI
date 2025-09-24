import { useMemo } from "react";
import clsx from "clsx";
import { buildInteractionClasses } from "../Styles";

export type UseComponentClassesProps = {
    baseClass?: string;
    direction?: "vertical" | "horizontal";
    imagePosition?: "top" | "left" | "right" | "background";
    sizeConfig?: any;
    glass?: boolean;
    hoverable?: boolean;
    clickable?: boolean;
    className?: string;
    bordered?: boolean;
    interactionKind?: any;
};

export function useComponentClasses(props: UseComponentClassesProps) {
    const {
        baseClass = "",
        direction = "vertical",
        imagePosition = "top",
        sizeConfig = {},
        glass = true,
        hoverable = true,
        clickable = false,
        className = "",
        interactionKind = "card",
    } = props;
    // bordered 仅用于类型兼容，实际 class 逻辑未用到

    const isHorizontal = direction === "horizontal" && imagePosition !== "top";

    const containerClasses = useMemo(() => clsx(
        baseClass,
        isHorizontal ? "flex" : "flex flex-col",
        imagePosition === "right" && isHorizontal && "flex-row-reverse",
        sizeConfig.borderRadius,
        sizeConfig.minHeight,
        "relative overflow-hidden transition-all duration-300 ease-out",
        glass
            ? "[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)]"
            : "[background:var(--bg)] hover:[background:var(--bg-hover)]",
        "text-[var(--text)] border border-[var(--border)]",
        (hoverable || clickable) && buildInteractionClasses({ kind: interactionKind, enabled: true }),
        clickable && "cursor-pointer",
        glass && "backdrop-blur-md",
        className
    ), [isHorizontal, imagePosition, sizeConfig, glass, hoverable, clickable, className]);

    return { containerClasses, isHorizontal };
}
