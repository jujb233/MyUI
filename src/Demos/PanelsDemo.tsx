import MyPanel from "../Components/MyUI/MyPanel";
import MyButton from "../Components/MyUI/MyButton";

const PanelsDemo = () => {
    return (
        <div className="p-4 md:p-8 space-y-12">
            <MyPanel>
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2">MyPanel 组件</h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400">一个多功能的容器，用于组织和突出显示内容。</p>
                </header>

                {/* 场景一: 通用内容容器 */}
                <section>
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4">场景一：通用内容容器</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        <code>MyPanel</code> 的最基本用途是作为一个内容容器。默认情况下，它带有优雅的玻璃拟态效果，非常适合包裹文本、表单或其他组件，使界面布局更有条理。
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                        <MyPanel>
                            <h3 className="font-bold text-lg mb-2">个人资料设置</h3>
                            <p>在这里修改您的个人信息和偏好设置。</p>
                            {/* 可以在这里放置表单 */}
                        </MyPanel>
                    </div>
                </section>

                {/* 场景二: 突出重要信息 */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-green-500 pl-4">场景二：突出重要信息</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        使用 <code>variant="primary"</code> 和 <code>color</code> 属性，可以将面板变成一个醒目的行动号召 (Call to Action) 区域或重要通知。
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                        <MyPanel variant="primary" size="large" color="blue">
                            <h3 className="font-bold text-xl mb-2">升级到高级版</h3>
                            <p>解锁所有高级功能，享受无限制的创作体验。</p>
                            <div className="mt-4">
                                <MyButton color="white">立即升级</MyButton>
                            </div>
                        </MyPanel>
                    </div>
                </section>

                {/* 场景三: 创造深度与质感 */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-amber-500 pl-4">场景三：创造深度与质感</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        当玻璃拟态不适用时，可以通过设置 <code>glass={`{false}`}</code> 和 <code>shadow</code> 来创建具有实体感和层次感的面板，这在Material Design风格中很常见。
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                        <MyPanel glass={false} shadow="lg" color="amber">
                            <h3 className="font-bold text-lg mb-2">新功能发布</h3>
                            <p>我们刚刚上线了期待已久的数据分析模块，快去看看吧！</p>
                        </MyPanel>
                    </div>
                </section>

                {/* 场景四: 视觉叙事与装饰 */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-purple-500 pl-4">场景四：视觉叙事与装饰</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        通过 <code>backgroundImage</code> 和 <code>title</code> 属性，面板可以成为一个富有表现力的视觉元素，非常适合用作页面头部、特色卡片或欢迎横幅。
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                        <MyPanel
                            size="large"
                            shadow="xl"
                            backgroundImage="/demo.png"
                            title="欢迎来到我们的社区"
                            color="white"
                            className="text-white"
                        >
                            <p className="font-bold">
                                在这里，您可以分享想法、提出问题，并与来自世界各地的开发者交流。
                            </p>
                        </MyPanel>
                    </div>
                </section>

                {/* 场景五: 表示非活动状态 */}
                <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-gray-500 pl-4">场景五：表示非活动状态</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        使用 <code>disabled</code> 属性可以清晰地向用户传达某个区域当前不可用，例如在特定条件下禁用的功能模块。
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg">
                        <MyPanel size="small" disabled>
                            <h3 className="font-bold text-md mb-2">高级筛选（未激活）</h3>
                            <p>升级到高级版以解锁此功能。</p>
                        </MyPanel>
                    </div>
                </section>
            </MyPanel>
        </div>
    );
};

export default PanelsDemo;
