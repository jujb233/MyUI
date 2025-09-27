import { MyNav } from "../Components/MyUI/MyNav";
import { MyButton } from "../Components/MyUI/MyButton";
import DemoLayout, { DemoSection } from "./DemoLayout";

function NavsDemo() {
    return (
        <DemoLayout
            title="MyNav 组件"
            description="定义品牌区、导航菜单与操作按钮的顶部导航。通过玻璃态、纯色和柔和主题切换，快速适配多种页面背景。"
        >
            <DemoSection
                title="导航样式速览"
                accentClassName="border-blue-500"
                description="不同 variant 与 glass 组合的对比，展示 Solid、Soft 与 Glass 风格的层次感。"
                panelProps={{ className: "space-y-6" }}
            >
                <MyNav
                    variant={{ role: 'primary', color: 'blue' }}
                    title={<a href="#" className="text-lg font-bold">MyApp</a>}
                    menu={
                        <>
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </>
                    }
                    actions={<MyButton size="small">Login</MyButton>}
                />
                <MyNav
                    variant={{ role: 'secondary', color: 'blue' }}
                    title={<a href="#" className="text-lg font-bold">MyApp</a>}
                    menu={
                        <>
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </>
                    }
                    actions={<MyButton size="small" variant={{ role: 'secondary', color: 'blue' }}>Login</MyButton>}
                />
                <MyNav
                    glass
                    title={<a href="#" className="text-lg font-bold">MyApp</a>}
                    menu={
                        <>
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </>
                    }
                    actions={<MyButton size="small" glass>Login</MyButton>}
                />
            </DemoSection>

            <DemoSection
                title="品牌与菜单排布"
                accentClassName="border-emerald-500"
                description="通过 brand、menu 与 actions 插槽自定义布局，可轻松放入图标、下拉菜单或按钮组。"
            >
                <MyNav
                    variant={{ role: 'primary', color: 'purple' }}
                    title={(
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-black">MyUI</span>
                            <span className="rounded-full bg-white/20 px-2 text-xs uppercase tracking-widest">Pro</span>
                        </div>
                    )}
                    menu={
                        <>
                            <li><a href="#" className="hover:underline">产品</a></li>
                            <li><a href="#" className="hover:underline">解决方案</a></li>
                            <li><a href="#" className="hover:underline">定价</a></li>
                        </>
                    }
                    actions={
                        <div className="flex items-center gap-3">
                            <MyButton size="small" variant={{ role: 'text', color: 'purple' }}>登录</MyButton>
                            <MyButton size="small" variant={{ role: 'secondary', color: 'purple' }}>注册</MyButton>
                        </div>
                    }
                />
            </DemoSection>

            <DemoSection
                title="玻璃态与背景融合"
                accentClassName="border-purple-500"
                description="将导航置于 Hero 背景之上时，glass + shadow 的组合可以保持可读性的同时维持轻盈质感。"
            >
                <div className="rounded-xl bg-gradient-to-r from-indigo-500/40 via-transparent to-pink-500/40 p-8">
                    <MyNav
                        glass
                        shadow="lg"
                        title={<a href="#" className="text-lg font-semibold">Aurora</a>}
                        menu={
                            <>
                                <li><a href="#" className="hover:underline">Features</a></li>
                                <li><a href="#" className="hover:underline">Docs</a></li>
                                <li><a href="#" className="hover:underline">Community</a></li>
                            </>
                        }
                        actions={<MyButton size="small" glass variant={{ role: 'primary', color: 'blue' }}>Get Started</MyButton>}
                    />
                </div>
            </DemoSection>
        </DemoLayout>
    );
}

export default NavsDemo;
