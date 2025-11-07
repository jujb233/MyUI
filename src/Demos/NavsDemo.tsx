import { MyNav } from "../Components/MyNav";
import { MyButton } from "../Components/MyButton";
import DemoLayout, { DemoSection } from "./DemoLayout";

export const NavsSections = () => {
    return (
        <>
            <DemoSection
                title="导航样式速览"
                accentClassName="border-blue-500"
                description="不同 variant 与 glass 组合的对比，展示 Solid、Soft 与 Glass 风格的层次感。"
                panelProps={{ class: "space-y-6" }}
            >
                <MyNav
                    variant={{ role: 'primary', color: 'blue' }}
                    animation={{ type: 'slide-down', duration: 400, easing: 'out' }}
                    interactionEnabled
                    interaction='rich'
                >
                    <MyNav.Brand>
                        <a href="#" class="text-lg font-bold">MyApp</a>
                    </MyNav.Brand>
                    <MyNav.Menu>
                        <li><a href="#" class="hover:underline">Home</a></li>
                        <li><a href="#" class="hover:underline">About</a></li>
                        <li><a href="#" class="hover:underline">Contact</a></li>
                    </MyNav.Menu>
                    <MyNav.Actions>
                        <MyButton size="small">Login</MyButton>
                    </MyNav.Actions>
                </MyNav>
                <MyNav
                    variant={{ role: 'secondary', color: 'blue' }}
                    animation="fade"
                    interactionEnabled
                    interaction='rich'
                >
                    <MyNav.Brand>
                        <a href="#" class="text-lg font-bold">MyApp</a>
                    </MyNav.Brand>
                    <MyNav.Menu>
                        <li><a href="#" class="hover:underline">Home</a></li>
                        <li><a href="#" class="hover:underline">About</a></li>
                        <li><a href="#" class="hover:underline">Contact</a></li>
                    </MyNav.Menu>
                    <MyNav.Actions>
                        <MyButton size="small" variant={{ role: 'secondary', color: 'blue' }}>Login</MyButton>
                    </MyNav.Actions>
                </MyNav>
                <MyNav
                    glass
                    animation={{ type: 'scale-in', duration: 350 }}
                    interactionEnabled
                    interaction='rich'
                >
                    <MyNav.Brand>
                        <a href="#" class="text-lg font-bold">MyApp</a>
                    </MyNav.Brand>
                    <MyNav.Menu>
                        <li><a href="#" class="hover:underline">Home</a></li>
                        <li><a href="#" class="hover:underline">About</a></li>
                        <li><a href="#" class="hover:underline">Contact</a></li>
                    </MyNav.Menu>
                    <MyNav.Actions>
                        <MyButton size="small" glass>Login</MyButton>
                    </MyNav.Actions>
                </MyNav>
            </DemoSection>

            <DemoSection
                title="品牌与菜单排布"
                accentClassName="border-emerald-500"
                description="通过 brand、menu 与 actions 插槽自定义布局，可轻松放入图标、下拉菜单或按钮组。"
            >
                <MyNav
                    variant={{ role: 'primary', color: 'purple' }}
                    animation="fade"
                    interactionEnabled
                    interaction='rich'
                >
                    <MyNav.Brand>
                        <div class="flex items-center gap-2">
                            <span class="text-xl font-black">MyUI</span>
                            <span class="rounded-full bg-white/20 px-2 text-xs uppercase tracking-widest">Pro</span>
                        </div>
                    </MyNav.Brand>
                    <MyNav.Menu>
                        <li><a href="#" class="hover:underline">产品</a></li>
                        <li><a href="#" class="hover:underline">解决方案</a></li>
                        <li><a href="#" class="hover:underline">定价</a></li>
                    </MyNav.Menu>
                    <MyNav.Actions>
                        <div class="flex items-center gap-3">
                            <MyButton size="small" variant={{ role: 'text', color: 'purple' }}>登录</MyButton>
                            <MyButton size="small" variant={{ role: 'secondary', color: 'purple' }}>注册</MyButton>
                        </div>
                    </MyNav.Actions>
                </MyNav>
            </DemoSection>

            <DemoSection
                title="玻璃态与背景融合"
                accentClassName="border-purple-500"
                description="将导航置于 Hero 背景之上时，glass + shadow 的组合可以保持可读性的同时维持轻盈质感。"
            >
                <div class="rounded-xl bg-linear-to-r from-indigo-500/40 via-transparent to-pink-500/40 p-8">
                    <MyNav
                        glass
                        shadow="lg"
                        animation={{ type: 'slide-up', duration: 500, easing: 'in-out' }}
                        interactionEnabled
                        interaction='rich'
                    >
                        <MyNav.Brand>
                            <a href="#" class="text-lg font-semibold">Aurora</a>
                        </MyNav.Brand>
                        <MyNav.Menu>
                            <li><a href="#" class="hover:underline">Features</a></li>
                            <li><a href="#" class="hover:underline">Docs</a></li>
                            <li><a href="#" class="hover:underline">Community</a></li>
                        </MyNav.Menu>
                        <MyNav.Actions>
                            <MyButton size="small" glass variant={{ role: 'primary', color: 'blue' }}>Get Started</MyButton>
                        </MyNav.Actions>
                    </MyNav>
                </div>
            </DemoSection>
        </>
    );
};

function NavsDemo() {
    return (
        <DemoLayout
            title="MyNav 组件"
            description="定义品牌区、导航菜单与操作按钮的顶部导航。通过玻璃态、纯色和柔和主题切换，快速适配多种页面背景。"
        >
            <NavsSections />
        </DemoLayout>
    );
}

export default NavsDemo;
