import { MyButton } from '../index'
import NavBar from './NavBar'
import MyPanel from "../Components/MyUI/MyPanel"

function ButtonsDemo() {
    return (
        <div className="min-h-screen relative overflow-hidden">
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
            <div className="fixed inset-0 z-10 bg-gradient-to-br from-purple-900/20 via-blue-800/20 to-cyan-700/20" />

            <NavBar />

            <div className="relative z-20 min-h-screen p-4 md:p-8">
                <header className="text-center mb-12">
                    <MyPanel theme="primary.indigo" size="large" glassMorphism className="mx-auto max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            MyButton 按钮组件演示
                        </h1>
                        <p className="text-xl text-white/90 drop-shadow-lg">功能丰富的按钮组件，支持多种样式和交互效果</p>
                    </MyPanel>
                </header>

                <main className="max-w-7xl mx-auto space-y-16">
                    <section>
                        <MyPanel theme="normal.slate" size="large" glassMorphism className="p-0">
                            <MyPanel theme="primary.violet" size="medium" glassMorphism className="mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-4xl">🔘</span>
                                    核心特性展示
                                </h2>
                                <p className="text-white/80">玻璃水晶与传统材质两套风格</p>
                            </MyPanel>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                <MyPanel theme="primary.indigo" size="medium" glassMorphism>
                                    <MyPanel theme="primary.indigo" size="small" glassMorphism className="mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                            <span className="text-3xl">🌟</span>
                                            玻璃水晶材质 (默认)
                                        </h3>
                                        <p className="text-white/80">毛玻璃效果，华丽渐变背景</p>
                                    </MyPanel>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-3">
                                            <MyButton theme="primary.indigo">Indigo</MyButton>
                                            <MyButton theme="primary.cyan">Cyan</MyButton>
                                            <MyButton theme="danger.rose">Rose</MyButton>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            <MyButton theme="normal.slate">Slate</MyButton>
                                            <MyButton theme="link.blue">Link Style</MyButton>
                                            <MyButton theme="primary.indigo" disabled>Disabled</MyButton>
                                        </div>
                                    </div>
                                </MyPanel>

                                <MyPanel theme="secondary.cyanBlue" size="medium" glassMorphism={false}>
                                    <MyPanel theme="secondary.cyanBlue" size="small" glassMorphism={false} className="mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                            <span className="text-3xl">🎨</span>
                                            传统材质样式
                                        </h3>
                                        <p className="text-white/80">经典扁平设计，纯色背景</p>
                                    </MyPanel>
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-3">
                                            <MyButton theme="primary.blue" glassMorphism={false}>Hex Blue</MyButton>
                                            <MyButton theme="primary.teal" glassMorphism={false}>Teal</MyButton>
                                            <MyButton theme="primary.orange" glassMorphism={false}>Orange</MyButton>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            <MyButton theme="normal.gray" glassMorphism={false}>Gray</MyButton>
                                            <MyButton theme="link.blue" glassMorphism={false}>Link Style</MyButton>
                                            <MyButton theme="primary.blue" glassMorphism={false} disabled>Disabled</MyButton>
                                        </div>
                                    </div>
                                </MyPanel>
                            </div>

                            <MyPanel theme="danger.rose" size="large" glassMorphism className="mb-8">
                                <MyPanel theme="danger.rose" size="small" glassMorphism className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                        <span className="text-3xl">📏</span>
                                        尺寸变化演示
                                    </h3>
                                </MyPanel>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">🌟 玻璃材质 + 不同尺寸</h4>
                                        <div className="flex flex-wrap gap-4 items-center">
                                            <MyButton size="small" theme="primary.indigo">小按钮</MyButton>
                                            <MyButton size="medium" theme="primary.cyan">中按钮</MyButton>
                                            <MyButton size="large" theme="danger.rose">大按钮</MyButton>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-4">🎨 传统材质 + 不同尺寸</h4>
                                        <div className="flex flex-wrap gap-4 items-center">
                                            <MyButton size="small" theme="primary.blue" glassMorphism={false}>小按钮</MyButton>
                                            <MyButton size="medium" theme="primary.teal" glassMorphism={false}>中按钮</MyButton>
                                            <MyButton size="large" theme="primary.orange" glassMorphism={false}>大按钮</MyButton>
                                        </div>
                                    </div>
                                </div>
                            </MyPanel>

                            <MyPanel theme="secondary.cyanBlue" size="large" glassMorphism className="mb-8">
                                <MyPanel theme="primary.indigo" size="small" glassMorphism className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                        <span className="text-3xl">🔗</span>
                                        链接按钮样式
                                    </h3>
                                </MyPanel>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <h4 className="text-white mb-4">不同尺寸</h4>
                                        <div className="space-y-3">
                                            <div><MyButton theme="link.blue" size="small">🔗 小型链接</MyButton></div>
                                            <div><MyButton theme="link.blue" size="medium">🌐 普通链接</MyButton></div>
                                            <div><MyButton theme="link.blue" size="large">📄 大型链接</MyButton></div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-white mb-4">材质对比</h4>
                                        <div className="space-y-3">
                                            <div><MyButton theme="link.blue">🌟 玻璃材质</MyButton></div>
                                            <div><MyButton theme="link.blue" glassMorphism={false}>📝 传统材质</MyButton></div>
                                            <div><MyButton theme="link.blue" disabled>❌ 禁用状态</MyButton></div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-white mb-4">交互演示</h4>
                                        <div className="space-y-3">
                                            <div><MyButton theme="link.blue" onClick={() => alert('链接点击!')}>📱 点击测试</MyButton></div>
                                            <div><MyButton theme="link.blue" onClick={() => window.open('https://github.com', '_blank')}>🔗 外部链接</MyButton></div>
                                            <div><MyButton theme="link.blue" onClick={() => console.log('控制台输出')}>📝 控制台</MyButton></div>
                                        </div>
                                    </div>
                                </div>
                            </MyPanel>

                            <MyPanel theme="normal.slate" size="large" glassMorphism>
                                <MyPanel theme="danger.rose" size="small" glassMorphism className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                        <span className="text-3xl">⚡</span>
                                        交互功能演示
                                    </h3>
                                </MyPanel>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div>
                                        <h4 className="text-white mb-4 text-center">🎯 事件处理</h4>
                                        <div className="space-y-3">
                                            <MyButton theme="primary.indigo" size="large" onClick={() => alert('🌟 玻璃水晶按钮被点击!')} className="w-full">🌟 点击弹窗</MyButton>
                                            <MyButton theme="primary.teal" glassMorphism={false} onClick={() => console.log('📝 传统材质按钮输出到控制台')} className="w-full">📝 控制台输出</MyButton>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white mb-4 text-center">📋 表单按钮</h4>
                                        <div className="space-y-3">
                                            <MyButton theme="primary.indigo" htmlType="submit" size="large" className="w-full">✅ 提交表单</MyButton>
                                            <MyButton theme="normal.slate" htmlType="reset" className="w-full">🔄 重置表单</MyButton>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white mb-4 text-center">🚫 禁用状态</h4>
                                        <div className="space-y-3">
                                            <MyButton theme="primary.indigo" disabled className="w-full">🌟 禁用 - 玻璃材质</MyButton>
                                            <MyButton theme="primary.orange" disabled glassMorphism={false} className="w-full">🎨 禁用 - 传统材质</MyButton>
                                        </div>
                                    </div>
                                </div>
                            </MyPanel>
                        </MyPanel>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ButtonsDemo
