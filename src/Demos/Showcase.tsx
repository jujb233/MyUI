import { createSignal, createEffect, For, Switch, Match } from "solid-js";
import { MyNav } from "../Components/MyNav";
import { MyButton } from "../Components/MyButton";
import DemoLayout from "./DemoLayout";
import { ButtonsSections } from "./ButtonsDemo";
import { CardsSections } from "./CardsDemo";
import { PanelsSections } from "./PanelsDemo";
import { NavsSections } from "./NavsDemo";

const tabs = [
    { key: "buttons", label: "按钮", emoji: "🍞" },
    { key: "cards", label: "卡片", emoji: "🗂️" },
    { key: "panels", label: "面板", emoji: "🪟" },
    { key: "navs", label: "导航", emoji: "🧭" },
] as const;

type TabKey = typeof tabs[number]["key"];

const Showcase = () => {
    const [active, setActive] = createSignal<TabKey>("buttons");

    // debug: log active state changes
    createEffect(() => {
        // eslint-disable-next-line no-console
        console.log('Showcase active changed:', active());
    });

    return (
        <DemoLayout
            title="MyUI 组件展示"
            description="统一的设计语言 · 丰富的排版节奏 · 清晰的组件演示"
            badgeLabel={
                <span class="flex items-center gap-2">
                    <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(16,185,129,0.8)]" />
                    Live Showcase
                </span>
            }
        >
            {/* visible debug indicator for active tab */}
            <div class="mb-4 text-sm text-slate-300">Active: {active()}</div>
            <div class="sticky top-4 z-10">
                <MyNav
                    glass
                    shadow="md"
                    interactionEnabled
                    interaction="rich"
                    title={<span class="font-bold">MyUI</span>}
                    menu={
                        <>
                            <For each={tabs}>{(t) => (
                                <li>
                                    <MyButton
                                        variant={active() === t.key ? { role: "primary", color: "blue" } : { role: "text", color: "blue" }}
                                        onClick={() => {
                                            // debug: log attempted tab changes
                                            // eslint-disable-next-line no-console
                                            console.log('Showcase: tab clicked', t.key);
                                            setActive(t.key);
                                            // eslint-disable-next-line no-console
                                            console.log('Showcase: active after setActive', active());
                                        }}
                                        size="small"
                                    >
                                        <span class="mr-1">{t.emoji}</span>
                                        {t.label}
                                    </MyButton>
                                </li>
                            )}</For>
                        </>
                    }
                    options={
                        <div class="flex items-center gap-2">
                            <MyButton size="small" variant={{ role: "secondary", color: "blue" }}>Theme</MyButton>
                            <MyButton size="small" glass>Feedback</MyButton>
                        </div>
                    }
                />
            </div>

            <Switch>
                <Match when={active() === "buttons"}>
                    <ButtonsSections />
                </Match>
                <Match when={active() === "cards"}>
                    <CardsSections />
                </Match>
                <Match when={active() === "panels"}>
                    <PanelsSections />
                </Match>
                <Match when={active() === "navs"}>
                    <NavsSections />
                </Match>
            </Switch>
        </DemoLayout>
    );
};

export default Showcase;
