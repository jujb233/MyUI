import MyCard from "../Components/MyUI/MyCard";
import MyButton from "../Components/MyUI/MyButton";
import MyPanel from "../Components/MyUI/MyPanel";

const CardsDemo = () => {
    return (
        <MyPanel
            backgroundImage="/demo.png"
            className="p-4 md:p-8 min-h-screen rounded-none"
        >
            <MyPanel color="zinc" className="bg-opacity-80 dark:bg-opacity-80 text-gray-200">
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
                            title="Your Name"
                            image="/vite.svg"
                            imagePosition="left"
                            direction="horizontal"
                            content="前端开发者，热衷于构建美观且实用的用户界面。"
                            size="medium"
                            className="max-w-lg"
                            footer={
                                <div className="flex justify-end space-x-2">
                                    <MyButton size="small" variant="link" color="blue">查看主页</MyButton>
                                    <MyButton size="small" variant="primary">关注</MyButton>
                                </div>
                            }
                        />
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
                            <MyCard
                                title="构建下一代UI组件库"
                                image="/demo.png"
                                tags={["React", "TypeScript", "TailwindCSS"]}
                                content="探索如何利用现代技术栈，从零开始打造一个功能强大、可定制的组件库。"
                                actions={<MyButton variant="link" color="blue">阅读全文 →</MyButton>}
                            />
                            <MyCard
                                title="设计系统中的色彩哲学"
                                image="/demo.png"
                                tags={["设计", "色彩", "UI/UX"]}
                                content="色彩不仅仅是美化界面，它还承载着品牌、情感和可用性。本文深入探讨了如何在设计系统中有效运用色彩。"
                                actions={<MyButton variant="link" color="blue">阅读全文 →</MyButton>}
                            />
                            <MyCard
                                title="前端性能优化实战"
                                image="/demo.png"
                                tags={["性能", "Webpack", "Web Vitals"]}
                                content="从代码分割到图片懒加载，学习一系列实用的技巧，显著提升你的Web应用加载速度和用户体验。"
                                actions={<MyButton variant="link" color="blue">阅读全文 →</MyButton>}
                            />
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
                                title="新消息"
                                clickable
                                hoverable
                                color="rose"
                                content="您有一条新的好友请求等待处理。"
                                onClick={() => alert("跳转到好友请求页面！")}
                                className="w-80"
                            />
                            <MyCard
                                title="系统更新"
                                clickable
                                hoverable
                                color="amber"
                                content="系统将在今晚凌晨2点进行维护更新，届时服务可能会短暂中断。"
                                onClick={() => alert("查看详情！")}
                                className="w-80"
                            />
                        </div>
                    </MyPanel>
                </section>

                {/* 更多自定义选项 */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-purple-500 pl-4">更多自定义选项</h2>
                    <p className="text-gray-300 mb-6">
                        <code>MyCard</code> 提供了丰富的自定义选项，例如关闭玻璃拟态效果 (<code>glass={`{false}`}</code>) 或自定义页脚，以满足不同设计需求。
                    </p>
                    <MyPanel glass className="p-6 rounded-lg flex justify-center">
                        <MyCard
                            title="自定义卡片"
                            glass={false}
                            color="emerald"
                            content="这张卡片关闭了玻璃效果，并使用了 'emerald' 配色。页脚部分可以添加额外信息或操作。"
                            footer={<div className="text-sm opacity-80">最后更新于 5分钟前</div>}
                            className="max-w-md"
                        />
                    </MyPanel>
                </section>
            </MyPanel>
        </MyPanel>
    );
};

export default CardsDemo;
