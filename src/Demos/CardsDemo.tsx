import MyCard from "../Components/MyUI/MyCard";
import MyButton from "../Components/MyUI/MyButton";
import MyPanel from "../Components/MyUI/MyPanel";

const CardsDemo = () => {
    return (
        <div className="p-4 md:p-8 space-y-8">
            <MyPanel>
                <h2 className="text-2xl font-bold mb-6 text-center">MyCard 组件功能展示</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* 基础卡片 */}
                    <MyCard
                        title="基础卡片"
                        content="这是一个功能齐全的基础卡片，包含了标题、内容和操作区域。"
                        actions={<MyButton size="small">了解更多</MyButton>}
                    />

                    {/* 带图片卡片 */}
                    <MyCard
                        title="带图片卡片"
                        image="/demo.png"
                        content="在卡片顶部展示一张精美的图片，增强视觉吸引力。"
                        actions={<>
                            <MyButton size="small" variant="primary">接受</MyButton>
                            <MyButton size="small" variant="normal">拒绝</MyButton>
                        </>}
                    />

                    {/* 水平布局 */}
                    <MyCard
                        title="水平布局"
                        image="/demo.png"
                        imagePosition="left"
                        direction="horizontal"
                        content="通过 `direction='horizontal'` 和 `imagePosition='left'` 实现图片与内容的水平排列。"
                        size="medium"
                    />

                    {/* 自定义颜色与页脚 */}
                    <MyCard
                        title="自定义颜色"
                        glass={false}
                        color="emerald"
                        content="关闭了玻璃效果 (`glass={false}`), 并设置 `color='emerald'`。页脚部分可以添加额外信息。"
                        footer={<div className="text-sm opacity-80">最后更新于 5分钟前</div>}
                    />

                    {/* 可点击卡片 */}
                    <MyCard
                        title="可交互卡片"
                        clickable
                        hoverable
                        color="rose"
                        content="设置 `clickable` 和 `hoverable` 属性，使整张卡片可以响应点击事件并带有悬浮效果。"
                        onClick={() => alert("卡片被点击了！")}
                    />

                    {/* 带标签的卡片 */}
                    <MyCard
                        title="带标签的卡片"
                        tags={["React", "组件库", "设计"]}
                        content="使用 `tags` 属性可以方便地为卡片添加分类或关键词。"
                        actions={<MyButton variant="link" color="blue">查看详情</MyButton>}
                    />
                </div>
            </MyPanel>
        </div>
    );
};

export default CardsDemo;
