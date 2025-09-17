import { MyButton } from './index'

function Demo() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    MyUI 组件库演示
                </h1>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">MyButton 组件</h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">基础样式</h3>
                            <div className="flex flex-wrap gap-4">
                                <MyButton styleType="primary">
                                    主要按钮
                                </MyButton>
                                <MyButton styleType="secondary">
                                    次要按钮
                                </MyButton>
                                <MyButton styleType="danger">
                                    危险按钮
                                </MyButton>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">禁用状态</h3>
                            <div className="flex flex-wrap gap-4">
                                <MyButton styleType="primary" disabled>
                                    禁用主要按钮
                                </MyButton>
                                <MyButton styleType="secondary" disabled>
                                    禁用次要按钮
                                </MyButton>
                                <MyButton styleType="danger" disabled>
                                    禁用危险按钮
                                </MyButton>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">带事件处理</h3>
                            <div className="flex flex-wrap gap-4">
                                <MyButton
                                    styleType="primary"
                                    onClick={() => alert('点击了主要按钮!')}
                                >
                                    点击我
                                </MyButton>
                                <MyButton
                                    styleType="secondary"
                                    onClick={() => console.log('控制台输出')}
                                >
                                    控制台输出
                                </MyButton>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">表单按钮</h3>
                            <div className="flex flex-wrap gap-4">
                                <MyButton styleType="primary" htmlType="submit">
                                    提交表单
                                </MyButton>
                                <MyButton styleType="secondary" htmlType="reset">
                                    重置表单
                                </MyButton>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-700 mb-2">自定义样式</h3>
                            <div className="flex flex-wrap gap-4">
                                <MyButton
                                    styleType="primary"
                                    className="px-8 py-3 text-lg"
                                >
                                    大按钮
                                </MyButton>
                                <MyButton
                                    styleType="secondary"
                                    className="px-2 py-1 text-sm"
                                >
                                    小按钮
                                </MyButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500">
                    <p>这是 MyUI 组件库的演示页面</p>
                    <p>查看控制台可以看到按钮点击事件的输出</p>
                </div>
            </div>
        </div>
    )
}

export default Demo
