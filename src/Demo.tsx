import { MyButton } from './index'

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
                            现代化的 React 按钮组件 - 玻璃水晶材质设计
                        </p>
                    </div>
                </header>

                {/* 主要演示区域 */}
                <main className="max-w-7xl mx-auto space-y-8">

                    {/* 核心特性展示 */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* 玻璃材质演示 */}
                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 mb-4">
                                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-3xl">🌟</span>
                                    玻璃水晶材质 (默认)
                                </h2>
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
                                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-3xl">🎨</span>
                                    传统材质样式
                                </h2>
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
                    </section>

                    {/* 尺寸展示 */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                        <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-xl p-4 mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-3xl">📏</span>
                                尺寸变化演示
                            </h2>
                            <p className="text-white/80">三种尺寸：Small | Medium (默认) | Large</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">🌟 玻璃材质 + 不同尺寸</h3>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <MyButton size="small" styleType="primary">小按钮</MyButton>
                                    <MyButton size="medium" styleType="secondary">中按钮</MyButton>
                                    <MyButton size="large" styleType="danger">大按钮</MyButton>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">🎨 传统材质 + 不同尺寸</h3>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <MyButton size="small" styleType="primary" glassMorphism={false}>小按钮</MyButton>
                                    <MyButton size="medium" styleType="secondary" glassMorphism={false}>中按钮</MyButton>
                                    <MyButton size="large" styleType="danger" glassMorphism={false}>大按钮</MyButton>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 链接按钮专区 */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-xl p-4 mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-3xl">🔗</span>
                                链接按钮样式
                            </h2>
                            <p className="text-white/80">专为页面跳转设计的轻量化链接样式</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <h3 className="text-white mb-4">不同尺寸</h3>
                                <div className="space-y-3">
                                    <div><MyButton styleType="link" size="small">🔗 小型链接</MyButton></div>
                                    <div><MyButton styleType="link" size="medium">🌐 普通链接</MyButton></div>
                                    <div><MyButton styleType="link" size="large">📄 大型链接</MyButton></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-white mb-4">材质对比</h3>
                                <div className="space-y-3">
                                    <div><MyButton styleType="link">🌟 玻璃材质</MyButton></div>
                                    <div><MyButton styleType="link" glassMorphism={false}>📝 传统材质</MyButton></div>
                                    <div><MyButton styleType="link" disabled>❌ 禁用状态</MyButton></div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-white mb-4">交互演示</h3>
                                <div className="space-y-3">
                                    <div><MyButton styleType="link" onClick={() => alert('链接点击!')}>📱 点击测试</MyButton></div>
                                    <div><MyButton styleType="link" onClick={() => window.open('https://github.com', '_blank')}>🔗 外部链接</MyButton></div>
                                    <div><MyButton styleType="link" onClick={() => console.log('控制台输出')}>📝 控制台</MyButton></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 交互功能演示 */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                        <div className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-xl p-4 mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-3xl">⚡</span>
                                交互功能演示
                            </h2>
                            <p className="text-white/80">事件处理、表单操作、禁用状态等功能展示</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div>
                                <h3 className="text-white mb-4 text-center">🎯 事件处理</h3>
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
                                <h3 className="text-white mb-4 text-center">📋 表单按钮</h3>
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
                                <h3 className="text-white mb-4 text-center">🚫 禁用状态</h3>
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
                    </section>

                    {/* 综合对比展示 */}
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl p-4 mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                <span className="text-3xl">🎭</span>
                                样式类型完整对比
                            </h2>
                            <p className="text-white/80">所有样式类型的玻璃材质与传统材质对比</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-white">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="text-left p-4">样式类型</th>
                                        <th className="text-center p-4">🌟 玻璃材质</th>
                                        <th className="text-center p-4">🎨 传统材质</th>
                                        <th className="text-center p-4">🚫 禁用状态</th>
                                    </tr>
                                </thead>
                                <tbody className="space-y-2">
                                    <tr className="border-b border-white/10">
                                        <td className="p-4 font-semibold">Primary</td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="primary">Primary Button</MyButton>
                                        </td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="primary" glassMorphism={false}>Primary Button</MyButton>
                                        </td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="primary" disabled>Primary Button</MyButton>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/10">
                                        <td className="p-4 font-semibold">Secondary</td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="secondary">Secondary Button</MyButton>
                                        </td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="secondary" glassMorphism={false}>Secondary Button</MyButton>
                                        </td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="secondary" disabled>Secondary Button</MyButton>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/10">
                                        <td className="p-4 font-semibold">Danger</td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="danger">Danger Button</MyButton>
                                        </td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="danger" glassMorphism={false}>Danger Button</MyButton>
                                        </td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="danger" disabled>Danger Button</MyButton>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/10">
                                        <td className="p-4 font-semibold">Normal</td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="normal">Normal Button</MyButton>
                                        </td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="normal" glassMorphism={false}>Normal Button</MyButton>
                                        </td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="normal" disabled>Normal Button</MyButton>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Link</td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="link">Link Button</MyButton>
                                        </td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="link" glassMorphism={false}>Link Button</MyButton>
                                        </td>
                                        <td className="p-4 text-center">
                                            <MyButton styleType="link" disabled>Link Button</MyButton>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>

                {/* 总结区域 */}
                <footer className="mt-16 mb-8">
                    <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-lg rounded-3xl p-8 mx-auto max-w-6xl border border-white/20">
                        <h2 className="text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
                            <span className="text-4xl">📋</span>
                            MyButton 组件特性总结
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-2xl">🎨</span>
                                    双材质设计
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• <strong>玻璃水晶材质:</strong> 默认启用，毛玻璃效果 + 莫奈风格渐变</li>
                                    <li>• <strong>传统材质:</strong> 经典扁平设计，纯色背景</li>
                                    <li>• <strong>智能切换:</strong> glassMorphism 属性控制</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-2xl">🌈</span>
                                    丰富样式类型
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• <strong>Primary:</strong> 主要操作按钮，紫蓝渐变</li>
                                    <li>• <strong>Secondary:</strong> 次要操作，青蓝渐变</li>
                                    <li>• <strong>Danger:</strong> 危险操作，红色渐变</li>
                                    <li>• <strong>Normal:</strong> 普通按钮，灰色渐变</li>
                                    <li>• <strong>Link:</strong> 链接样式，轻量化设计</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-2xl">📏</span>
                                    灵活尺寸配置
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• <strong>Small:</strong> 紧凑尺寸，适用于工具栏</li>
                                    <li>• <strong>Medium:</strong> 默认尺寸，通用场景</li>
                                    <li>• <strong>Large:</strong> 大尺寸，突出重要操作</li>
                                    <li>• <strong>响应式:</strong> 自适应不同屏幕尺寸</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-2xl">⚡</span>
                                    现代交互体验
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• <strong>流畅动画:</strong> 200ms 缓动过渡效果</li>
                                    <li>• <strong>悬停反馈:</strong> 缩放 + 颜色变化</li>
                                    <li>• <strong>点击反馈:</strong> 缩放动画提供触觉感受</li>
                                    <li>• <strong>焦点管理:</strong> 完善的键盘导航支持</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-2xl">🔧</span>
                                    完整功能支持
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• <strong>HTML 类型:</strong> button | submit | reset</li>
                                    <li>• <strong>事件处理:</strong> onClick 等标准事件</li>
                                    <li>• <strong>禁用状态:</strong> 视觉 + 交互双重禁用</li>
                                    <li>• <strong>自定义样式:</strong> className 属性扩展</li>
                                </ul>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                    <span className="text-2xl">💡</span>
                                    设计理念
                                </h3>
                                <ul className="space-y-2 text-sm text-white/90">
                                    <li>• <strong>现代美学:</strong> 借鉴 Fluent UI 和 Material Design</li>
                                    <li>• <strong>可访问性:</strong> 符合 WCAG 无障碍标准</li>
                                    <li>• <strong>品牌一致:</strong> 统一的视觉语言系统</li>
                                    <li>• <strong>开发友好:</strong> TypeScript 完整类型支持</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 inline-block">
                                <p className="text-lg text-white drop-shadow-md mb-2">
                                    🎉 <strong>MyButton 组件</strong> - 现代化的 React 按钮解决方案
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
