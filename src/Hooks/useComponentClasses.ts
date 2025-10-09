import { useMemo } from "react";
import { styleUtil } from "../Utils";


/**
 * @description `useComponentClasses` 的属性
 */
export type UseComponentClassesProps = {
    /**
     * @description 基础 CSS 类
     */
    baseClass?: string;
    /**
     * @description 布局方向
     * @default "vertical"
     */
    direction?: "vertical" | "horizontal";
    /**
     * @description 图片位置
     * @default "top"
     */
    imagePosition?: "top" | "left" | "right" | "background";
    /**
     * @description 尺寸配置
     */
    sizeConfig?: any;
    /**
     * @description 是否启用玻璃效果
     * @default true
     */
    glass?: boolean;
    /**
     * @description 是否可悬停
     * @default true
     */
    hoverable?: boolean;
    /**
     * @description 是否可点击
     * @default false
     */
    clickable?: boolean;
    /**
     * @description 额外的 CSS 类
     */
    className?: string;
    /**
     * @description 是否带边框 (仅用于类型兼容)
     */
    bordered?: boolean;
    /**
     * @description 是否启用统一交互（hover/active）
     * @default true（当 hoverable 或 clickable 为 true 时生效）
     */
    interactionEnabled?: boolean;
    /** 是否显示 focus ring（容器类组件默认不显示） */
    focusRing?: boolean;
};

/**
 * @description 根据组件属性动态生成 CSS 类
 * @param props `useComponentClasses` 的属性
 * @returns `containerClasses` 容器的 CSS 类, `isHorizontal` 是否为水平布局
 */
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
        interactionEnabled = true,
        focusRing = false,
    } = props;

    const isHorizontal = direction === "horizontal" && imagePosition !== "top";

    const containerClasses = useMemo(() => {
        return styleUtil.ClassNameBuilder
            .prototype
            .add(baseClass)
            .add(isHorizontal ? "flex" : "flex flex-col")
            .addIf(imagePosition === "right" && isHorizontal, "flex-row-reverse")
            .add(sizeConfig.borderRadius)
            .add(sizeConfig.minHeight)
            .add("relative overflow-hidden transition-all duration-300 ease-out")
            .add(
                glass
                    ? "[background:var(--glass-bg)] hover:[background:var(--glass-bg-hover)]"
                    : "[background:var(--bg)] hover:[background:var(--bg-hover)]"
            )
            .add("text-[var(--text)] border border-[var(--border)]")
            .addIf((hoverable || clickable) && interactionEnabled, styleUtil.buildInteractionClasses({ enabled: true }))
            .addIf(clickable, "cursor-pointer")
            .addIf(glass, "backdrop-blur-md")
            .add(className)
            .build();
    }, [isHorizontal, imagePosition, sizeConfig, glass, hoverable, clickable, className, baseClass, interactionEnabled, focusRing]);

    return { containerClasses, isHorizontal };
}
