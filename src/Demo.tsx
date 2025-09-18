import { MyButton, MyCard } from './index'

function Demo() {
    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* 动态背景层 */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: 'url(/1757785339517.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}
            />

            {/* 渐变遮罩层 */}
            <div className="fixed inset-0 z-10 bg-gradient-to-br from-purple-900/20 via-blue-800/20 to-cyan-700/20" />

            {/* 主内容区域 */}
            <div className="relative z-20 min-h-screen p-4 md:p-8">
                {/* 标题区域 */}
                <header className="text-center mb-12">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mx-auto max-w-4xl border border-white/20">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            MyUI 组件库
                        </h1>
                        <p className="text-xl text-white/90 drop-shadow-lg">
                            现代化的 React UI 组件 - 玻璃水晶材质设计
                        </p>
                        <div className="mt-6 flex justify-center gap-4">
                            <MyButton
                                styleType="primary"
                                size="large"
                                onClick={() => document.getElementById('card-demos')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                🎴 查看卡片演示
                            </MyButton>
                            <MyButton
                                styleType="secondary"
                                size="large"
                                onClick={() => document.getElementById('button-demos')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                🔘 查看按钮演示
                            </MyButton>
                        </div>
                    </div>
                </header>

                {/* 主要演示区域 */}
                <main className="max-w-7xl mx-auto space-y-16">

                    {/* MyCard 组件展示区域 */}
                    <section id="card-demos" className="scroll-mt-8">
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl p-4 mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-4xl">🎴</span>
                                    MyCard 卡片组件演示
                                </h2>
                                <p className="text-white/80">现代化的卡片设计，支持多种布局和交互效果</p>
                            </div>

                            {/* 基础卡片演示 */}
                            <div className="mb-12">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="text-2xl">🏷️</span>
                                    基础卡片展示
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <MyCard
                                        title="基础卡片"
                                        content="这是一个基础的卡片组件，展示了标题和内容的基本布局。"
                                        variant="white"
                                        size="medium"
                                        actions={
                                            <div className="flex gap-2">
                                                <MyButton size="small" styleType="primary">操作</MyButton>
                                                <MyButton size="small" styleType="secondary">详情</MyButton>
                                            </div>
                                        }
                                    />

                                    <MyCard
                                        title="带图片卡片"
                                        content="这个卡片包含了顶部图片，适合展示产品或文章预览。"
                                        image="/1757785339517.png"
                                        imageAlt="示例图片"
                                        variant="primary"
                                        size="medium"
                                        tags={["新功能", "推荐"]}
                                        actions={
                                            <MyButton size="small" styleType="primary">查看更多</MyButton>
                                        }
                                    />

                                    <MyCard
                                        title="点击卡片"
                                        content="这个卡片支持点击事件，整个卡片都是可交互的。"
                                        variant="secondary"
                                        clickable
                                        onClick={() => alert('卡片被点击了！')}
                                        footer={
                                            <div className="text-sm text-gray-600">
                                                点击整个卡片试试
                                            </div>
                                        }
                                    />
                                </div>
                            </div>

                            {/* 完整功能演示 */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="text-2xl">🎯</span>
                                    完整功能演示
                                </h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <MyCard
                                        title="功能完整的卡片"
                                        content="这个卡片展示了所有可用的功能：标题、内容、图片、标签、操作按钮和页脚。"
                                        image="/1757785339517.png"
                                        imageAlt="功能演示"
                                        imagePosition="top"
                                        variant="primary"
                                        size="large"
                                        glassMorphism={true}
                                        hoverable={true}
                                        tags={["热门", "推荐", "新品"]}
                                        actions={
                                            <div className="flex gap-2">
                                                <MyButton styleType="primary">立即购买</MyButton>
                                                <MyButton styleType="secondary">加入购物车</MyButton>
                                                <MyButton styleType="link">收藏</MyButton>
                                            </div>
                                        }
                                        footer={
                                            <div className="flex justify-between items-center text-sm">
                                                <span>价格: ¥999</span>
                                                <span className="text-green-600">库存充足</span>
                                            </div>
                                        }
                                    />

                                    <MyCard
                                        title="自定义内容卡片"
                                        variant="white"
                                        size="large"
                                        glassMorphism={true}
                                    >
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-xl">👤</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold">用户名</h4>
                                                    <p className="text-sm text-gray-600">user@example.com</p>
                                                </div>
                                            </div>
                                            <div className="border-t pt-4">
                                                <h5 className="font-medium mb-2">最近活动</h5>
                                                <ul className="space-y-1 text-sm text-gray-600">
                                                    <li>• 登录系统</li>
                                                    <li>• 查看了 5 个产品</li>
                                                    <li>• 完成了 2 个任务</li>
                                                </ul>
                                            </div>
                                            <div className="flex gap-2 pt-4">
                                                <MyButton size="small" styleType="primary">编辑资料</MyButton>
                                                <MyButton size="small" styleType="secondary">查看详情</MyButton>
                                            </div>
                                        </div>
                                    </MyCard>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* MyButton 组件展示区域 */}
                    <section id="button-demos" className="scroll-mt-8">
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-4xl">🔘</span>
                                    MyButton 按钮组件演示
                                </h2>
                                <p className="text-white/80">功能丰富的按钮组件，支持多种样式和交互效果</p>
                            </div>

                            {/* 核心特性展示 */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                {/* 玻璃材质演示 */}
                                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                            <span className="text-3xl">🌟</span>
                                            玻璃水晶材质 (默认)
                                        </h3>
                                        <p className="text-white/80">毛玻璃效果，华丽渐变背景</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-3">
                                            <MyButton styleType="primary">Primary</MyButton>
                                            <MyButton styleType="secondary">Secondary</MyButton>
                                            <MyButton styleType="danger">Danger</MyButton>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            <MyButton styleType="normal">Normal</MyButton>
                                            <MyButton styleType="link">Link Style</MyButton>
                                            <MyButton styleType="primary" disabled>Disabled</MyButton>
                                        </div>
                                    </div>
                                </div>

                                {/* 传统材质演示 */}
                                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                                    <div className="bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-xl p-4 mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                            <span className="text-3xl">🎨</span>
                                            传统材质样式
                                        </h3>
                                        <p className="text-white/80">经典扁平设计，纯色背景</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-3">
                                            <MyButton styleType="primary" glassMorphism={false}>Primary</MyButton>
                                            <MyButton styleType="secondary" glassMorphism={false}>Secondary</MyButton>
                                            <MyButton styleType="danger" glassMorphism={false}>Danger</MyButton>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            <MyButton styleType="normal" glassMorphism={false}>Normal</MyButton>
                                            <MyButton styleType="link" glassMorphism={false}>Link Style</MyButton>
                                            <MyButton styleType="primary" glassMorphism={false} disabled>Disabled</MyButton>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 尺寸展示 */}
                            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
                                <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-4 mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                        <span className="text-3xl">📏</span>
                                        尺寸变化演示
                                    </h3>
                                    <p className="text-white/80">三种尺寸：Small | Medium (默认) | Large</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">🌟 玻璃材质 + 不同尺寸</h4>
                                        <div className="flex flex-wrap gap-4 items-center">
                                            <MyButton size="small" styleType="primary">小按钮</MyButton>
                                            <MyButton size="medium" styleType="secondary">中按钮</MyButton>
                                            <MyButton size="large" styleType="danger">大按钮</MyButton>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">🎨 传统材质 + 不同尺寸</h4>
                                        <div className="flex flex-wrap gap-4 items-center">
                                            <MyButton size="small" styleType="primary" glassMorphism={false}>小按钮</MyButton>
                                            <MyButton size="medium" styleType="secondary" glassMorphism={false}>中按钮</MyButton>
                                            <MyButton size="large" styleType="danger" glassMorphism={false}>大按钮</MyButton>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 链接按钮专区 */}
                            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
                                <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl p-4 mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                        <span className="text-3xl">🔗</span>
                                        链接按钮样式
                                    </h3>
                                    <p className="text-white/80">专为页面跳转设计的轻量化链接样式</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <h4 className="text-white mb-4">不同尺寸</h4>
                                        <div className="space-y-3">
                                            <div><MyButton styleType="link" size="small">🔗 小型链接</MyButton></div>
                                            <div><MyButton styleType="link" size="medium">🌐 普通链接</MyButton></div>
                                            <div><MyButton styleType="link" size="large">📄 大型链接</MyButton></div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-white mb-4">材质对比</h4>
                                        <div className="space-y-3">
                                            <div><MyButton styleType="link">🌟 玻璃材质</MyButton></div>
                                            <div><MyButton styleType="link" glassMorphism={false}>📝 传统材质</MyButton></div>
                                            <div><MyButton styleType="link" disabled>❌ 禁用状态</MyButton></div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-white mb-4">交互演示</h4>
                                        <div className="space-y-3">
                                            <div><MyButton styleType="link" onClick={() => alert('链接点击!')}>📱 点击测试</MyButton></div>
                                            <div><MyButton styleType="link" onClick={() => window.open('https://github.com', '_blank')}>🔗 外部链接</MyButton></div>
                                            <div><MyButton styleType="link" onClick={() => console.log('控制台输出')}>📝 控制台</MyButton></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 交互功能演示 */}
                            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                                <div className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-xl p-4 mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                        <span className="text-3xl">⚡</span>
                                        交互功能演示
                                    </h3>
                                    <p className="text-white/80">事件处理、表单操作、禁用状态等功能展示</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="text-white mb-4 text-center">🎯 事件处理</h4>
                                        <div className="space-y-3">
                                            <MyButton
                                                styleType="primary"
                                                size="large"
                                                onClick={() => alert('🌟 玻璃水晶按钮被点击!')}
                                                className="w-full"
                                            >
                                                🌟 点击弹窗
                                            </MyButton>
                                            <MyButton
                                                styleType="secondary"
                                                glassMorphism={false}
                                                onClick={() => console.log('📝 传统材质按钮输出到控制台')}
                                                className="w-full"
                                            >
                                                📝 控制台输出
                                            </MyButton>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-white mb-4 text-center">📋 表单按钮</h4>
                                        <div className="space-y-3">
                                            <MyButton
                                                styleType="primary"
                                                htmlType="submit"
                                                size="large"
                                                className="w-full"
                                            >
                                                ✅ 提交表单
                                            </MyButton>
                                            <MyButton
                                                styleType="normal"
                                                htmlType="reset"
                                                className="w-full"
                                            >
                                                🔄 重置表单
                                            </MyButton>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-white mb-4 text-center">🚫 禁用状态</h4>
                                        <div className="space-y-3">
                                            <MyButton styleType="primary" disabled className="w-full">
                                                🌟 禁用 - 玻璃材质
                                            </MyButton>
                                            <MyButton styleType="danger" disabled glassMorphism={false} className="w-full">
                                                🎨 禁用 - 传统材质
                                            </MyButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* 总结区域 */}
                <footer className="mt-16 mb-8">
                    <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-3xl p-8 mx-auto max-w-6xl border border-white/20">
                        <h2 className="text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
                            <span className="text-4xl">📋</span>
                            MyUI 组件特性总结
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                            {/* MyButton 特性 */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🔘</span>
                                    MyButton 特性
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• <strong>5种样式类型:</strong> primary、secondary、danger、normal、link</li>
                                    <li>• <strong>3种尺寸配置:</strong> small、medium、large</li>
                                    <li>• <strong>双材质设计:</strong> 玻璃态 + 传统样式</li>
                                    <li>• <strong>流畅交互:</strong> 200ms缓动过渡效果</li>
                                    <li>• <strong>完整功能:</strong> 事件处理、表单支持、禁用状态</li>
                                </ul>
                            </div>

                            {/* MyCard 特性 */}
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <span className="text-2xl">🎴</span>
                                    MyCard 特性
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• <strong>灵活布局:</strong> 垂直、水平、图片位置</li>
                                    <li>• <strong>4种主题:</strong> white、gray、primary、secondary</li>
                                    <li>• <strong>丰富内容:</strong> 标题、内容、图片、标签、操作、页脚</li>
                                    <li>• <strong>交互支持:</strong> 悬停、点击、自定义事件</li>
                                    <li>• <strong>响应式设计:</strong> 自适应不同屏幕尺寸</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 inline-block">
                                <p className="text-lg text-white drop-shadow-md mb-2">
                                    🎉 <strong>MyUI 组件库</strong> - 现代化的 React UI 解决方案
                                </p>
                                <p className="text-white/80">
                                    完美融合美观设计与实用功能，为您的应用提供一流的用户体验
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Demo
