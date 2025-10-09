import { MyButton } from "../Components/MyButton";
import { MyNav } from "../Components/MyNav";
import type { ContentKey } from "./Demo";

type NavBarProps = {
    onSelectContent: (content: ContentKey) => void;
    currentContent: ContentKey;
};

const NavBar = ({ onSelectContent, currentContent }: NavBarProps) => {
    return (
        <MyNav
            glass
            title={<span className="font-bold text-xl">MyUI 组件演示</span>}
            menu={
                <>
                    <MyButton
                        variant={currentContent === 'buttons' ? { role: 'primary', color: 'blue' } : { role: 'text', color: 'blue' }}
                        onClick={() => onSelectContent("buttons")}
                    >
                        🍞 按钮
                    </MyButton>
                    <MyButton
                        variant={currentContent === 'cards' ? { role: 'primary', color: 'blue' } : { role: 'text', color: 'blue' }}
                        onClick={() => onSelectContent("cards")}
                    >
                        🗂️ 卡片
                    </MyButton>
                    <MyButton
                        variant={currentContent === 'panels' ? { role: 'primary', color: 'blue' } : { role: 'text', color: 'blue' }}
                        onClick={() => onSelectContent("panels")}
                    >
                        🪟 面板
                    </MyButton>
                    <MyButton
                        variant={currentContent === 'navs' ? { role: 'primary', color: 'blue' } : { role: 'text', color: 'blue' }}
                        onClick={() => onSelectContent("navs")}
                    >
                        🧭 导航
                    </MyButton>
                </>
            }
        />
    );
};

export default NavBar;
