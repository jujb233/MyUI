import { useState } from "react";
import ButtonsDemo from "./ButtonsDemo";
import CardsDemo from "./CardsDemo";
import PanelsDemo from "./PanelsDemo";
import NavBar from "./NavBar";

type DemoContent = "buttons" | "cards" | "panels";

const Demo = () => {
    const [activeContent, setActiveContent] = useState<DemoContent>("buttons");

    const renderContent = () => {
        switch (activeContent) {
            case "buttons":
                return <ButtonsDemo />;
            case "cards":
                return <CardsDemo />;
            case "panels":
                return <PanelsDemo />;
            default:
                return <ButtonsDemo />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <NavBar onSelectContent={setActiveContent} currentContent={activeContent} />
            <main>
                {renderContent()}
            </main>
        </div>
    );
};

export default Demo;
