import { MyPanel } from "../Components/MyPanel";
import { MyButton } from "../Components/MyButton";
import DemoLayout, { DemoSection } from "./DemoLayout";

export const PanelsSections = () => {
    return (
        <>
            <DemoSection
                title="场景一：通用内容容器"
                accentClassName="border-blue-500"
                description={(
                    <>
                        默认玻璃态即可提供柔和背景与分层感，非常适合作为设置面板、表单或信息块的包裹容器。
                    </>
                )}
            >
                <MyPanel interaction='rich' animation={{ type: 'fade' }}>
                    <MyPanel.Header title="个人资料设置" />
                    <MyPanel.Content>
                        <p>在这里修改您的个人信息和偏好设置。</p>
                    </MyPanel.Content>
                </MyPanel>
            </DemoSection>

            <DemoSection
                title="场景二：突出重要信息"
                accentClassName="border-green-500"
                description="运用 variant 配色打造 CTA 或通知区域，视觉上更具指向性。"
            >
                <MyPanel size="large" variant={{ role: 'primary', color: 'blue' }} animation={{ type: 'slide-down', duration: 400 }}>
                    <MyPanel.Header title="升级到高级版" />
                    <MyPanel.Content>
                        <p>解锁所有高级功能，享受无限制的创作体验。</p>
                        <div class="mt-4">
                            <MyButton variant={{ role: 'primary', color: 'blue' }}>立即升级</MyButton>
                        </div>
                    </MyPanel.Content>
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
                <MyPanel glass={false} shadow="lg" variant={{ role: 'warning', color: 'yellow' }} animation={{ type: 'scale-in' }}>
                    <MyPanel.Header title="新功能发布" />
                    <MyPanel.Content>
                        <p>我们刚刚上线了期待已久的数据分析模块，快去看看吧！</p>
                    </MyPanel.Content>
                </MyPanel>
            </DemoSection>

            <DemoSection
                title="交互与投影 (Elevation)"
                accentClassName="border-indigo-500"
                description="不同的 shadow 等级与 glass 组合，帮助界面形成轻重缓急的层次。"
                panelProps={{ class: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }}
            >
                {(['sm', 'md', 'lg'] as const).map((sh, idx) => (
                    <MyPanel shadow={sh} glass={false} variant={{ role: 'secondary', color: 'gray' }} size="small" animation={{ type: 'fade', delay: idx * 120 }}>
                        <MyPanel.Header title={`实体 shadow=${sh}`} />
                        <MyPanel.Content>
                            <p class="text-sm opacity-80">glass=false</p>
                        </MyPanel.Content>
                    </MyPanel>
                ))}
                {(['sm', 'md', 'lg'] as const).map((sh, idx) => (
                    <MyPanel shadow={sh} glass variant={{ role: 'secondary', color: 'gray' }} size="small" animation={{ type: 'fade', delay: idx * 120 }}>
                        <MyPanel.Header title={`玻璃 ${sh}`} />
                        <MyPanel.Content>
                            <p class="text-sm opacity-80">glass=true</p>
                        </MyPanel.Content>
                    </MyPanel>
                ))}
                <MyPanel size="small" variant={{ role: 'primary', color: 'purple' }} animation="pulse">
                    <MyPanel.Header title="自定义颜色" />
                    <MyPanel.Content>
                        <p class="text-sm opacity-80">color="purple"</p>
                    </MyPanel.Content>
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
                    animation={{ type: 'fade', duration: 500 }}
                    backgroundImage="/demo.png"
                    variant={{ role: 'primary', color: 'red' }}
                    class="text-white"
                >
                    <MyPanel.Header title="欢迎来到我们的社区" />
                    <MyPanel.Content>
                        <p class="font-bold">
                            在这里，您可以分享想法、提出问题，并与来自世界各地的开发者交流。
                        </p>
                    </MyPanel.Content>
                </MyPanel>
            </DemoSection>

            <DemoSection
                title="场景五：表示非活动状态"
                accentClassName="border-gray-500"
                description="通过 disabled 属性，淡化视觉与指针交互，传达当前不可用状态。"
            >
                <MyPanel size="small" disabled>
                    <MyPanel.Header title="高级筛选（未激活）" />
                    <MyPanel.Content>
                        <p>升级到高级版以解锁此功能。</p>
                    </MyPanel.Content>
                </MyPanel>
            </DemoSection>
        </>
    );
};

const PanelsDemo = () => {
    return (
        <DemoLayout
            title="MyPanel 组件"
            description="用于组织内容、制造分层和打造场景氛围的万能容器。通过尺寸、投影、玻璃态与背景图的组合，MyPanel 能从表单卡片扩展到英雄横幅。"
        >
            <PanelsSections />
        </DemoLayout>
    );
};

export default PanelsDemo;
