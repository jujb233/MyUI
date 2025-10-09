import { MyPanel } from "../Components/MyPanel";
import { MyButton } from "../Components/MyButton";
import DemoLayout, { DemoSection } from "./DemoLayout";

const PanelsDemo = () => {
    return (
        <DemoLayout
            title="MyPanel 组件"
            description="用于组织内容、制造分层和打造场景氛围的万能容器。通过尺寸、投影、玻璃态与背景图的组合，MyPanel 能从表单卡片扩展到英雄横幅。"
        >
            <DemoSection
                title="场景一：通用内容容器"
                accentClassName="border-blue-500"
                description={(
                    <>
                        默认玻璃态即可提供柔和背景与分层感，非常适合作为设置面板、表单或信息块的包裹容器。
                    </>
                )}
            >
                <MyPanel interaction='rich'>
                    <h3 className="mb-2 text-lg font-bold">个人资料设置</h3>
                    <p>在这里修改您的个人信息和偏好设置。</p>
                </MyPanel>
            </DemoSection>

            <DemoSection
                title="场景二：突出重要信息"
                accentClassName="border-green-500"
                description="运用 variant 配色打造 CTA 或通知区域，视觉上更具指向性。"
            >
                <MyPanel size="large" variant={{ role: 'primary', color: 'blue' }}>
                    <h3 className="mb-2 text-xl font-bold">升级到高级版</h3>
                    <p>解锁所有高级功能，享受无限制的创作体验。</p>
                    <div className="mt-4">
                        <MyButton variant={{ role: 'primary', color: 'blue' }}>立即升级</MyButton>
                    </div>
                </MyPanel>
            </DemoSection>

            <DemoSection
                title="场景三：创造深度与质感"
                accentClassName="border-amber-500"
                description={(
                    <>
                        关闭玻璃态并叠加 <code>shadow</code>，就能获得更具实体感的卡片效果，这在 Material 风格页面中十分常见。
                    </>
                )}
            >
                <MyPanel glass={false} shadow="lg" variant={{ role: 'warning', color: 'yellow' }}>
                    <h3 className="mb-2 text-lg font-bold">新功能发布</h3>
                    <p>我们刚刚上线了期待已久的数据分析模块，快去看看吧！</p>
                </MyPanel>
            </DemoSection>

            <DemoSection
                title="交互与投影 (Elevation)"
                accentClassName="border-indigo-500"
                description="不同的 shadow 等级与 glass 组合，帮助界面形成轻重缓急的层次。"
                panelProps={{ className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }}
            >
                {(['sm', 'md', 'lg'] as const).map((sh) => (
                    <MyPanel key={sh} shadow={sh} glass={false} variant={{ role: 'secondary', color: 'gray' }} size="small">
                        <h4 className="mb-1 font-semibold">实体 shadow={sh}</h4>
                        <p className="text-sm opacity-80">glass=false</p>
                    </MyPanel>
                ))}
                {(['sm', 'md', 'lg'] as const).map((sh) => (
                    <MyPanel key={`g-${sh}`} shadow={sh} glass variant={{ role: 'secondary', color: 'gray' }} size="small">
                        <h4 className="mb-1 font-semibold">玻璃 {sh}</h4>
                        <p className="text-sm opacity-80">glass=true</p>
                    </MyPanel>
                ))}
                <MyPanel size="small" variant={{ role: 'primary', color: 'purple' }}>
                    <h4 className="mb-1 font-semibold">自定义颜色</h4>
                    <p className="text-sm opacity-80">color="purple"</p>
                </MyPanel>
            </DemoSection>

            <DemoSection
                title="场景四：视觉叙事与装饰"
                accentClassName="border-purple-500"
                description={(
                    <>
                        <code>backgroundImage</code> 与 <code>title</code> 让面板化身英雄横幅或欢迎区域，玻璃态能够让背景图隐约透出。
                    </>
                )}
            >
                <MyPanel
                    size="large"
                    shadow="xl"
                    backgroundImage="/demo.png"
                    title="欢迎来到我们的社区"
                    variant={{ role: 'primary', color: 'blue' }}
                    className="text-white"
                >
                    <p className="font-bold">
                        在这里，您可以分享想法、提出问题，并与来自世界各地的开发者交流。
                    </p>
                </MyPanel>
            </DemoSection>

            <DemoSection
                title="场景五：表示非活动状态"
                accentClassName="border-gray-500"
                description="通过 disabled 属性，淡化视觉与指针交互，传达当前不可用状态。"
            >
                <MyPanel size="small" disabled>
                    <h3 className="mb-2 text-md font-bold">高级筛选（未激活）</h3>
                    <p>升级到高级版以解锁此功能。</p>
                </MyPanel>
            </DemoSection>
        </DemoLayout>
    );
};

export default PanelsDemo;
