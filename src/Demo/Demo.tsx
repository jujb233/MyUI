import { MyButton } from '../index'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

function Demo() {
    const navigate = useNavigate()
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
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mx-auto max-w-4xl border border-white/20">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            MyUI 组件库
                        </h1>
                        <p className="text-xl text-white/90 drop-shadow-lg">现代化的 React UI 组件 - 玻璃水晶材质设计</p>
                        <div className="mt-6 flex justify-center gap-4">
                            <MyButton styleType="primary" size="large" onClick={() => navigate('/cards')}>🎴 查看卡片演示</MyButton>
                            <MyButton styleType="secondary" size="large" onClick={() => navigate('/buttons')}>🔘 查看按钮演示</MyButton>
                        </div>
                    </div>
                </header>

                <main className="max-w-5xl mx-auto space-y-10">
                    <section className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 mb-6">
                            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">快速开始</h2>
                            <p className="text-white/80">选择一个组件进入对应的演示页面。</p>
                        </div>
                        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4">
                            <MyButton styleType="primary" size="large" onClick={() => navigate('/cards')}>🎴 前往卡片演示</MyButton>
                            <MyButton styleType="secondary" size="large" onClick={() => navigate('/buttons')}>🔘 前往按钮演示</MyButton>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Demo
