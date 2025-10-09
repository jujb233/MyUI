import { useState } from "react";
import ButtonsDemo from "./ButtonsDemo";
import CardsDemo from "./CardsDemo";
import PanelsDemo from "./PanelsDemo";
import NavsDemo from "./NavsDemo";
import { MyNav } from "../Components/MyNav";
import { MyButton } from "../Components/MyButton";

type ContentMap = {
    buttons: React.FC;
    cards: React.FC;
    panels: React.FC;
    navs: React.FC;
};

const contentMap: ContentMap = {
    buttons: ButtonsDemo,
    cards: CardsDemo,
    panels: PanelsDemo,
    navs: NavsDemo,
};

export type ContentKey = keyof ContentMap;

function Demo() {
    const [content, setContent] = useState<ContentKey>("buttons");

    const handleSelectContent = (selectedContent: ContentKey) => {
        setContent(selectedContent);
    };

    const ContentComponent = contentMap[content];

    return (
        <div className="min-h-screen bg-gray-100">
            <MyNav
                glass
                title={<span className="font-bold text-xl">MyUI 组件演示</span>}
                menu={
                    <>
                        <MyButton
                            variant={content === 'buttons' ? { role: 'primary', color: 'blue' } : { role: 'text', color: 'blue' }}
                            onClick={() => handleSelectContent("buttons")}
                        >
                            🍞 按钮
                        </MyButton>
                        <MyButton
                            variant={content === 'cards' ? { role: 'primary', color: 'blue' } : { role: 'text', color: 'blue' }}
                            onClick={() => handleSelectContent("cards")}
                        >
                            🗂️ 卡片
                        </MyButton>
                        <MyButton
                            variant={content === 'panels' ? { role: 'primary', color: 'blue' } : { role: 'text', color: 'blue' }}
                            onClick={() => handleSelectContent("panels")}
                        >
                            🪟 面板
                        </MyButton>
                        <MyButton
                            variant={content === 'navs' ? { role: 'primary', color: 'blue' } : { role: 'text', color: 'blue' }}
                            onClick={() => handleSelectContent("navs")}
                        >
                            🧭 导航
                        </MyButton>
                    </>
                }
            />
            <main className="p-0">
                <ContentComponent />
            </main>
        </div>
    );
}

export default Demo;
