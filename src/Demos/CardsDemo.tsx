import MyCard from "../Components/MyUI/MyCard";
import MyButton from "../Components/MyUI/MyButton/MyButton";
import MyPanel from "../Components/MyUI/MyPanel/MyPanel";

const CardsDemo = () => {
    return (
        <MyPanel
            backgroundImage="/demo.png"
            className="p-4 md:p-8 min-h-screen rounded-none"
        >
            <MyPanel variant={{ role: 'secondary', color: 'gray' }} className="bg-opacity-80 dark:bg-opacity-80 text-gray-200">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white">MyCard 组件</h1>
                    <p className="text-lg text-gray-300">探索 MyCard 组件的多种用途和灵活性。</p>
                </header>

                {/* 场景一: 用户资料卡 */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4">场景一：用户资料展示</h2>
                    <p className="text-gray-300 mb-6">
                        卡片是展示用户简介、社交信息或团队成员的理想选择。这里我们使用水平布局，将头像和用户信息并排展示，简洁明了。
                    </p>
                    <MyPanel glass className="p-6 rounded-lg flex justify-center">
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
                    </MyPanel>
                </section>

                {/* 场景二: 文章/博客预览 */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-green-500 pl-4">场景二：文章或博客预览</h2>
                    <p className="text-gray-300 mb-6">
                        在博客、新闻或任何内容驱动的网站上，卡片是吸引读者点击的绝佳方式。顶部图片、引人注目的标题和简洁的摘要是关键。
                    </p>
                    <MyPanel glass className="p-6 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        </div>
                    </MyPanel>
                </section>

                {/* 场景三: 交互与通知 */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-rose-500 pl-4">场景三：交互式通知</h2>
                    <p className="text-gray-300 mb-6">
                        通过设置 <code>clickable</code> 和 <code>hoverable</code> 属性，卡片可以变成一个可交互的元素，非常适合用于通知、提醒或需要用户操作的场景。
                    </p>
                    <MyPanel glass className="p-6 rounded-lg">
                        <div className="flex flex-wrap justify-center gap-8">
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
                        </div>
                    </MyPanel>
                </section>

                {/* Elevation 与玻璃态对比 */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-indigo-500 pl-4">投影与玻璃态对比</h2>
                    <p className="text-gray-300 mb-6">不同 <code>shadow</code> 等级与 <code>glass</code> 组合在卡片组件上的表现：</p>
                    <MyPanel glass className="p-6 rounded-lg grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {(['sm', 'md', 'lg'] as const).map(sh => (
                            <MyCard key={sh} shadow={sh} glass={false}>
                                <MyCard.Header>{`shadow=${sh}`}</MyCard.Header>
                                <MyCard.Content>实体投影</MyCard.Content>
                            </MyCard>
                        ))}
                        {(['sm', 'md', 'lg'] as const).map(sh => (
                            <MyCard key={`g-${sh}`} shadow={sh} glass>
                                <MyCard.Header>{`glass + ${sh}`}</MyCard.Header>
                                <MyCard.Content>玻璃态</MyCard.Content>
                            </MyCard>
                        ))}
                        <MyCard variant={{ role: 'primary', color: 'purple' }}>
                            <MyCard.Header>自定义主题</MyCard.Header>
                            <MyCard.Content>紫色</MyCard.Content>
                        </MyCard>
                    </MyPanel>
                </section>

                {/* 更多自定义选项 */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-purple-500 pl-4">更多自定义选项</h2>
                    <p className="text-gray-300 mb-6">
                        <code>MyCard</code> 提供了丰富的自定义选项，例如关闭玻璃态效果 (<code>glass={`{false}`}</code>) 或自定义页脚，以满足不同设计需求。
                    </p>
                    <MyPanel glass className="p-6 rounded-lg flex justify-center">
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
                    </MyPanel>
                </section>
            </MyPanel>
        </MyPanel>
    );
};

export default CardsDemo;
