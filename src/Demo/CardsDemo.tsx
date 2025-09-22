import { MyButton, MyCard } from '../index'
import NavBar from './NavBar'
import MyPanel from "../Components/MyUI/MyPanel"

function CardsDemo() {
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
                    <MyPanel color="indigo" size="large" glassMorphism className="mx-auto max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            MyCard 卡片组件演示
                        </h1>
                        <p className="text-xl text-white/90 drop-shadow-lg">现代化的卡片设计，支持多种布局和交互效果</p>
                    </MyPanel>
                </header>

                <main className="max-w-7xl mx-auto space-y-16">
                    <section>
                        <MyPanel color="slate" size="large" glassMorphism className="p-0">
                            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl p-4 mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-4xl">🎴</span>
                                    基础卡片展示
                                </h2>
                                <p className="text-white/80">支持图片、标签、操作与页脚</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                                <MyCard
                                    title="基础卡片"
                                    content="这是一个基础的卡片组件，展示了标题和内容的基本布局。"
                                    color="white"
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
                                    color="indigo"
                                    size="medium"
                                    tags={["新功能", "推荐"]}
                                    actions={<MyButton size="small" styleType="primary">查看更多</MyButton>}
                                />

                                <MyCard
                                    title="点击卡片"
                                    content="这个卡片支持点击事件，整个卡片都是可交互的。"
                                    color="cyan"
                                    clickable
                                    onClick={() => alert('卡片被点击了！')}
                                    footer={<div className="text-sm text-gray-600">点击整个卡片试试</div>}
                                />
                            </div>

                            <div>
                                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl p-4 mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                        <span className="text-3xl">🎯</span>
                                        完整功能演示
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <MyCard
                                        title="功能完整的卡片"
                                        content="这个卡片展示了所有可用的功能：标题、内容、图片、标签、操作按钮和页脚。"
                                        image="/1757785339517.png"
                                        imageAlt="功能演示"
                                        imagePosition="top"
                                        color="indigo"
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

                                    <MyCard title="自定义内容卡片" color="white" size="large" glassMorphism={true}>
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
                        </MyPanel>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default CardsDemo
