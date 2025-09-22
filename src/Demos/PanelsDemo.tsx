import MyPanel from "../Components/MyUI/MyPanel";
import MyButton from "../Components/MyUI/MyButton";

const PanelsDemo = () => {
    return (
        <div className="p-4 md:p-8 space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">MyPanel 组件功能展示</h2>

            <MyPanel>
                <h3 className="font-bold text-lg mb-2">默认面板</h3>
                <p>这是一个标准的面板，具有默认设置（中等尺寸、玻璃效果开启）。它非常适合用作通用内容容器。</p>
            </MyPanel>

            <MyPanel variant="primary" size="large" color="blue">
                <h3 className="font-bold text-xl mb-2">主色调大号面板</h3>
                <p>这是一个使用了 `primary` 变体和 `large` 尺寸的面板，并指定了蓝色 `color`。非常适合用于需要重点突出的区域。</p>
                <div className="mt-4">
                    <MyButton color="white">面板内的按钮</MyButton>
                </div>
            </MyPanel>

            <MyPanel glass={false} shadow="lg" color="amber">
                <h3 className="font-bold text-lg mb-2">实体面板与阴影</h3>
                <p>此面板关闭了玻璃效果 (`glass={false}`), 并应用了 `lg` 级别的阴影 (`shadow='lg'`)，颜色为琥珀色 (`color='amber'`)。适合需要更强实体感的场景。</p>
            </MyPanel>

            <MyPanel size="small" disabled>
                <h3 className="font-bold text-md mb-2">禁用状态面板</h3>
                <p>此面板处于禁用状态 (`disabled`)，所有交互都将被禁止。可以看到整个面板呈现半透明状态，鼠标指针变为“不可用”样式。</p>
            </MyPanel>

            <MyPanel
                size="large"
                shadow="xl"
                backgroundImage="/demo.png"
                title="背景图片与标题"
                color="white"
                className="text-white"
            >
                <p className="font-bold">
                    这是一个带有背景图片和标题的面板。
                    `backgroundImage` 属性设置背景图，`title` 属性在顶部添加一个大标题。
                    为了让文字更清晰，我们将文字颜色设置为了白色。
                </p>
            </MyPanel>
        </div>
    );
};

export default PanelsDemo;
