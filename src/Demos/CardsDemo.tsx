import MyCard from "../Components/MyUI/MyCard";
import MyButton from "../Components/MyUI/MyButton/MyButton";
import DemoLayout, { DemoSection } from "./DemoLayout";

const CardsDemo = () => {
    return (
        <DemoLayout
            title="MyCard 组件"
            description="展示内容、强调信息或承载交互的万能卡片。通过布局、标签与交互状态，MyCard 可以适配从用户资料到文章推荐的多种场景。"
        >
            <DemoSection
                title="场景一：用户资料展示"
                accentClassName="border-blue-500"
                description="水平布局搭配头像与关键信息，适合团队介绍、成员列表或社交资料卡"
                panelProps={{ className: "flex justify-center" }}
            >
                <MyCard
                    imagePosition="left"
                    direction="horizontal"
                    size="medium"
                    className="max-w-lg"
                >
                    <MyCard.Image src="/vite.svg" />
                    <MyCard.Header>Your Name</MyCard.Header>
                    <MyCard.Content>前端开发者，热衷于构建美观且实用的用户界面。</MyCard.Content>
                    <MyCard.Footer>
                        <div className="flex justify-end space-x-2">
                            <MyButton size="small" variant={{ role: 'text', color: 'blue' }}>查看主页</MyButton>
                            <MyButton size="small" variant={{ role: 'primary', color: 'blue' }}>关注</MyButton>
                        </div>
                    </MyCard.Footer>
                </MyCard>
            </DemoSection>

            <DemoSection
                title="场景二：文章或博客预览"
                accentClassName="border-green-500"
                description="图片、标签与摘要的组合突出阅读价值，适合博客、资讯或知识库列表。"
                panelProps={{ className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3" }}
            >
                <MyCard>
                    <MyCard.Image src="/demo.png" />
                    <MyCard.Tags tags={["React", "TypeScript", "TailwindCSS"]} />
                    <MyCard.Header>构建下一代UI组件库</MyCard.Header>
                    <MyCard.Content>探索如何利用现代技术栈，从零开始打造一个功能强大、可定制的组件库。</MyCard.Content>
                    <MyCard.Actions>
                        <MyButton variant={{ role: 'text', color: 'blue' }}>阅读全文 →</MyButton>
                    </MyCard.Actions>
                </MyCard>
                <MyCard>
                    <MyCard.Image src="/demo.png" />
                    <MyCard.Tags tags={["设计", "色彩", "UI/UX"]} />
                    <MyCard.Header>设计系统中的色彩哲学</MyCard.Header>
                    <MyCard.Content>色彩不仅仅是美化界面，它还承载着品牌、情感和可用性。本文深入探讨了如何在设计系统中有效运用色彩。</MyCard.Content>
                    <MyCard.Actions>
                        <MyButton variant={{ role: 'text', color: 'blue' }}>阅读全文 →</MyButton>
                    </MyCard.Actions>
                </MyCard>
                <MyCard>
                    <MyCard.Image src="/demo.png" />
                    <MyCard.Tags tags={["性能", "Webpack", "Web Vitals"]} />
                    <MyCard.Header>前端性能优化实战</MyCard.Header>
                    <MyCard.Content>从代码分割到图片懒加载，学习一系列实用的技巧，显著提升你的Web应用加载速度和用户体验。</MyCard.Content>
                    <MyCard.Actions>
                        <MyButton variant={{ role: 'text', color: 'blue' }}>阅读全文 →</MyButton>
                    </MyCard.Actions>
                </MyCard>
            </DemoSection>

            <DemoSection
                title="场景三：交互式通知"
                accentClassName="border-rose-500"
                description="可点击、可 hover 的卡片可以承担通知、提醒等高粘性交互，视觉上依旧保持轻巧。"
                panelProps={{ className: "flex flex-wrap justify-center gap-8" }}
            >
                <MyCard
                    clickable
                    hoverable
                    variant={{ role: 'danger', color: 'red' }}
                    onClick={() => alert("跳转到好友请求页面！")}
                    className="w-80"
                >
                    <MyCard.Header>新消息</MyCard.Header>
                    <MyCard.Content>您有一条新的好友请求等待处理。</MyCard.Content>
                </MyCard>
                <MyCard
                    clickable
                    hoverable
                    variant={{ role: 'warning', color: 'yellow' }}
                    onClick={() => alert("查看详情！")}
                    className="w-80"
                >
                    <MyCard.Header>系统更新</MyCard.Header>
                    <MyCard.Content>系统将在今晚凌晨2点进行维护更新，届时服务可能会短暂中断。</MyCard.Content>
                </MyCard>
            </DemoSection>

            <DemoSection
                title="投影与玻璃态对比"
                accentClassName="border-indigo-500"
                description={(
                    <>
                        通过组合 <code>glass</code> 与不同 <code>shadow</code> 等级，可以快速在界面中塑造实体卡片或通透的玻璃卡片。
                    </>
                )}
                panelProps={{ className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3" }}
            >
                {(['sm', 'md', 'lg'] as const).map((sh) => (
                    <MyCard key={sh} shadow={sh} glass={false}>
                        <MyCard.Header>{`shadow=${sh}`}</MyCard.Header>
                        <MyCard.Content>实体投影</MyCard.Content>
                    </MyCard>
                ))}
                {(['sm', 'md', 'lg'] as const).map((sh) => (
                    <MyCard key={`g-${sh}`} shadow={sh} glass>
                        <MyCard.Header>{`glass + ${sh}`}</MyCard.Header>
                        <MyCard.Content>玻璃态</MyCard.Content>
                    </MyCard>
                ))}
                <MyCard variant={{ role: 'primary', color: 'purple' }}>
                    <MyCard.Header>自定义主题</MyCard.Header>
                    <MyCard.Content>紫色</MyCard.Content>
                </MyCard>
            </DemoSection>

            <DemoSection
                title="更多自定义选项"
                accentClassName="border-purple-500"
                description={(
                    <>
                        关闭玻璃态、替换配色或自定义页脚都只需调整几个属性，满足品牌化与业务差异化需求。
                    </>
                )}
                panelProps={{ className: "flex justify-center" }}
            >
                <MyCard
                    glass={false}
                    variant={{ role: 'success', color: 'green' }}
                    className="max-w-md"
                >
                    <MyCard.Header>自定义卡片</MyCard.Header>
                    <MyCard.Content>这张卡片关闭了玻璃效果，并使用了 'emerald' 配色。页脚部分可以添加额外信息或操作。</MyCard.Content>
                    <MyCard.Footer>
                        <div className="text-sm opacity-80">最后更新于 5分钟前</div>
                    </MyCard.Footer>
                </MyCard>
            </DemoSection>
        </DemoLayout>
    );
};

export default CardsDemo;
