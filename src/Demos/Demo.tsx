import { useState } from "react";
import ButtonsDemo from "./ButtonsDemo";
import CardsDemo from "./CardsDemo";
import PanelsDemo from "./PanelsDemo";
import NavsDemo from "./NavsDemo";
import NavBar from "./NavBar";

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
            <NavBar onSelectContent={handleSelectContent} currentContent={content} />
            <main className="p-0">
                <ContentComponent />
            </main>
        </div>
    );
}

export default Demo;
