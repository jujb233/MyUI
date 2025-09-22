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
        <div className="min-h-screen bg-gray-100">
            <NavBar onSelectContent={setActiveContent} />
            <main className="p-4 md:p-8">
                {renderContent()}
            </main>
        </div>
    );
};

export default Demo;
