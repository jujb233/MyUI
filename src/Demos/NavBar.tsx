import { MyButton } from "../Components/MyUI/MyButton/index";

type NavBarProps = {
    onSelectContent: (content: "buttons" | "cards" | "panels") => void;
    currentContent: "buttons" | "cards" | "panels";
};

const NavBar = ({ onSelectContent, currentContent }: NavBarProps) => {
    return (
        <nav className="bg-white/30 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="font-bold text-xl text-gray-800">MyUI 组件演示</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            <MyButton
                                variant={currentContent === 'buttons' ? { role: 'primary', color: 'blue' } : { role: 'text', color: 'blue' }}
                                onClick={() => onSelectContent("buttons")}
                            >
                                按钮 (Buttons)
                            </MyButton>
                            <MyButton
                                variant={currentContent === 'cards' ? { role: 'primary', color: 'blue' } : { role: 'text', color: 'blue' }}
                                onClick={() => onSelectContent("cards")}
                            >
                                卡片 (Cards)
                            </MyButton>
                            <MyButton
                                variant={currentContent === 'panels' ? { role: 'primary', color: 'blue' } : { role: 'text', color: 'blue' }}
                                onClick={() => onSelectContent("panels")}
                            >
                                面板 (Panels)
                            </MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
