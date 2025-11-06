import type { ComponentProps, JSX } from "solid-js";
import clsx from "clsx";
import { MyPanel } from "../Components/MyPanel";

export type DemoLayoutProps = {
    /** 页面主标题 */
    title: string;
    /** 标题下的描述文本或节点 */
    description: JSX.Element | string;
    /** 顶部圆角徽标的文案，可选 */
    badgeLabel?: JSX.Element | string;
    /** 主体内容 */
    children: JSX.Element;
};

const DemoLayout = ({
    title,
    description,
    badgeLabel = "MyUI Component Showcase",
    children,
}: DemoLayoutProps) => {
    return (
        <MyPanel
            backgroundImage="/demo.png"
            className="relative min-h-screen rounded-none overflow-hidden p-4 md:p-10"
            interaction='none'
        >
            <div
                class="absolute inset-0 bg-slate-950/75 backdrop-blur-2xl"
                aria-hidden
            />
            <div class="relative w-full space-y-12 text-slate-100">
                <header class="space-y-6 text-center">
                    {badgeLabel ? (
                        <span class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">
                            {badgeLabel}
                        </span>
                    ) : null}
                    <div class="space-y-4">
                        <h1 class="text-4xl font-extrabold tracking-tight md:text-5xl">
                            {title}
                        </h1>
                        <p class="mx-auto max-w-3xl text-base text-slate-200/90 md:text-lg">
                            {description}
                        </p>
                    </div>
                </header>
                <div class="space-y-12">{children}</div>
            </div>
        </MyPanel>
    );
};

type DemoSectionProps = {
    /** 小节标题 */
    title: string;
    /** 小节描述，可省略 */
    description?: JSX.Element | string;
    /** 左侧色条 className，例如 `border-blue-500` */
    accentClassName?: string;
    /** section 外层 className */
    className?: string;
    /** 小节主体包裹的 MyPanel 属性，自定义布局或效果 */
    panelProps?: ComponentProps<typeof MyPanel>;
    /** 小节主体内容 */
    children: JSX.Element;
};

export const DemoSection = ({
    title,
    description,
    accentClassName = "border-blue-500",
    className,
    panelProps,
    children,
}: DemoSectionProps) => {
    const { className: panelClassName, glass, ...restPanelProps } = panelProps ?? {};

    return (
        <section class={clsx("space-y-6", className)}>
            <div class={clsx("border-l-4 pl-4", accentClassName)}>
                <h2 class="text-2xl font-bold text-white md:text-3xl">{title}</h2>
            </div>
            {description ? (
                <p class="text-slate-200/85 leading-relaxed">{description}</p>
            ) : null}
            <MyPanel
                glass={glass ?? true}
                {...restPanelProps}
                className={clsx(
                    "rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-lg md:p-8",
                    panelClassName
                )}
                interaction='none'
            >
                {children}
            </MyPanel>
        </section>
    );
};

export default DemoLayout;
