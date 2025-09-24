import MyButton from "../Components/MyUI/MyButton";
import MyPanel from "../Components/MyUI/MyPanel";
import { VARIANTS } from "../Styles";

const ButtonsDemo = () => {
    return (
        <MyPanel backgroundImage="/demo.png" className="p-4 md:p-8 min-h-screen rounded-none">

            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white">MyButton 组件</h1>
                <p className="text-lg text-gray-300">全面的按钮集合，满足您在不同场景下的需求。</p>
            </header>

            {/* 基础按钮与变体 */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4">基础按钮与变体</h2>
                <p className="text-gray-300 mb-6">
                    按钮有多种预设样式 (<code>variant</code>)，以适应不同的视觉优先级。从主操作按钮到次要链接按钮，总有一款适合您。
                </p>
                <MyPanel glass className="p-6 rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {VARIANTS.map((variant) => (
                            <div key={variant} className="flex flex-col items-center space-y-2">
                                <MyButton variant={variant} size="large" color="blue">
                                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                                </MyButton>
                                <code className="text-sm bg-black/50 px-2 py-1 rounded">{`variant="${variant}"`}</code>
                            </div>
                        ))}
                    </div>
                </MyPanel>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                {/* 场景化颜色 */}
                <section>
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-green-500 pl-4">场景化颜色</h2>
                    <p className="text-gray-300 mb-6">
                        使用 <code>color</code> 属性为按钮赋予不同的情感和语义。
                    </p>
                    <MyPanel glass className="p-6 rounded-lg flex flex-wrap justify-center gap-6">
                        <MyButton color="green" variant="primary">保存成功</MyButton>
                        <MyButton color="red" variant="primary">删除警告</MyButton>
                        <MyButton color="amber" variant="primary">操作确认</MyButton>
                        <MyButton color="blue" variant="primary">常规操作</MyButton>
                    </MyPanel>
                </section>

                {/* 尺寸与布局 */}
                <section>
                    <h2 className="text-3xl font-bold mb-4 border-l-4 border-purple-500 pl-4">尺寸与布局</h2>
                    <p className="text-gray-300 mb-6">
                        通过 <code>size</code> 属性控制按钮大小以适应不同空间。
                    </p>
                    <MyPanel glass className="p-6 rounded-lg flex items-center justify-center gap-6">
                        <MyButton size="small" color="blue">小型</MyButton>
                        <MyButton size="medium" color="green">中型</MyButton>
                        <MyButton size="large" color="red">大型</MyButton>
                    </MyPanel>
                </section>
            </div>


            {/* 交互与 Elevation */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4 border-l-4 border-indigo-500 pl-4">交互与投影 (Elevation)</h2>
                <p className="text-gray-300 mb-6">
                    统一的交互系统为按钮提供一致的 <code>hover</code> / <code>active</code> 缩放动画。通过 <code>glass</code> 与 <code>shadow</code> 组合可以展示不同的深度层次。
                </p>
                <MyPanel className="p-6 rounded-lg space-y-6">
                    <div>
                        <h3 className="font-semibold mb-3">实体阴影 (glass={'{false}'})</h3>
                        <div className="flex flex-wrap gap-4">
                            {(['sm', 'md', 'lg', 'xl'] as const).map(s => (
                                <MyButton key={s} shadow={s} glass={false} variant="primary" color="blue">
                                    shadow={s}
                                </MyButton>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">玻璃态默认投影</h3>
                        <div className="flex flex-wrap gap-4">
                            {(['primary', 'secondary', 'danger'] as const).map(v => (
                                <MyButton key={v} variant={v} glass>
                                    {v}
                                </MyButton>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">Link 变体交互</h3>
                        <div className="flex gap-4">
                            <MyButton variant="link" color="blue">普通 Link</MyButton>
                            <MyButton variant="link" color="#6366f1">自定义 Hex</MyButton>
                        </div>
                    </div>
                </MyPanel>
            </section>

            {/* 特殊状态: 玻璃拟态与禁用 */}
            <section>
                <h2 className="text-3xl font-bold mb-4 border-l-4 border-gray-500 pl-4">特殊状态：玻璃拟态与禁用</h2>
                <p className="text-gray-300 mb-6">
                    通过 <code>glass</code> 属性可以开启玻璃拟态效果，让按钮呈现半透明质感。在有背景图片时，这种效果尤为明显。
                </p>
                <MyPanel glass className="p-8 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
                        <div className="flex flex-col items-center space-y-3">
                            <MyButton glass color="purple">玻璃效果</MyButton>
                            <code className="bg-black/50 text-white px-2 py-1 rounded">glass={`{true}`}</code>
                        </div>
                        <div className="flex flex-col items-center space-y-3">
                            <MyButton glass={false} color="purple">实体效果</MyButton>
                            <code className="bg-black/50 text-white px-2 py-1 rounded">glass={`{false}`}</code>
                        </div>
                        <div className="flex flex-col items-center space-y-3">
                            <MyButton disabled>禁用状态</MyButton>
                            <code className="bg-black/50 text-white px-2 py-1 rounded">disabled</code>
                        </div>
                    </div>
                </MyPanel>
            </section>
        </MyPanel>

    );
};

export default ButtonsDemo;
