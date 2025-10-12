import { useState } from "react";
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
    const [active, setActive] = useState<TabKey>("buttons");

    return (
        <DemoLayout
            title="MyUI 组件展示"
            description="统一的设计语言 · 丰富的排版节奏 · 清晰的组件演示"
            badgeLabel={
                <span className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(16,185,129,0.8)]" />
                    Live Showcase
                </span>
            }
        >
            <div className="sticky top-4 z-10">
                <MyNav
                    glass
                    shadow="md"
                    interactionEnabled
                    interaction="rich"
                    title={<span className="font-bold">MyUI</span>}
                    menu={
                        <>
                            {tabs.map((t) => (
                                <li key={t.key}>
                                    <MyButton
                                        variant={active === t.key ? { role: "primary", color: "blue" } : { role: "text", color: "blue" }}
                                        onClick={() => setActive(t.key)}
                                        size="small"
                                    >
                                        <span className="mr-1">{t.emoji}</span>
                                        {t.label}
                                    </MyButton>
                                </li>
                            ))}
                        </>
                    }
                    options={
                        <div className="flex items-center gap-2">
                            <MyButton size="small" variant={{ role: "secondary", color: "blue" }}>Theme</MyButton>
                            <MyButton size="small" glass>Feedback</MyButton>
                        </div>
                    }
                />
            </div>

            {active === "buttons" && <ButtonsSections />}
            {active === "cards" && <CardsSections />}
            {active === "panels" && <PanelsSections />}
            {active === "navs" && <NavsSections />}
        </DemoLayout>
    );
};

export default Showcase;
