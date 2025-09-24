

# MyCard 教程

`MyCard` 是一个灵活的卡片容器组件，支持图片、标签、操作区、玻璃拟态等多种布局。推荐使用组合式 API 进行内容和结构扩展。

## 快速开始

```tsx
import { MyCard, MyButton } from 'myui';

<MyCard variant="primary" size="medium" glass>
  <MyCard.Image src="/demo.png" alt="示例图片" />
  <MyCard.Header>示例卡片</MyCard.Header>
  <MyCard.Content>这是一段内容。</MyCard.Content>
  <MyCard.Actions>
    <MyButton size="small">了解更多</MyButton>
  </MyCard.Actions>
  <MyCard.Tags>科技</MyCard.Tags>
</MyCard>
```

## 组件结构与核心属性

MyCard 采用组合式 API，支持以下子组件：

- `MyCard.Image`：图片展示，props: `src`, `alt`, `position`（可选）
- `MyCard.Header`：标题区域
- `MyCard.Content`：内容区域
- `MyCard.Actions`：操作区（如按钮）
- `MyCard.Tags`：标签区
- `MyCard.Footer`：底部区域（可选）

MyCard 支持以下核心属性：

| 属性           | 类型                                 | 默认值      | 说明                   |
|----------------|--------------------------------------|-------------|------------------------|
| variant        | 主题名（如 'primary'）               | 'normal'    | 卡片风格               |
| color          | 预设色名或自定义色                   | 依赖 variant| 主题/自定义颜色        |
| size           | 'small' | 'medium' | 'large'         | 'medium'    | 卡片尺寸               |
| glass          | boolean                              | true        | 是否启用玻璃拟态效果   |
| clickable      | boolean                              | false       | 是否可点击             |
| shadow         | 阴影等级（如 'md'）                  | 'md'        | 卡片阴影               |
| bordered       | boolean                              | true        | 是否显示边框           |
| imagePosition  | 'top' | 'left' | 'right' | 'background'| 'top'      | 图片位置               |
| direction      | 'vertical' | 'horizontal'             | 'vertical'  | 内容布局方向           |
| hoverable      | boolean                              | true        | 是否启用悬停效果       |
| className      | string                               | ''          | 自定义类名             |
| children       | ReactNode                            | 必须        | 组合子组件或自定义内容 |

> 说明：图片、标签、操作区等推荐通过子组件实现，而非直接作为 props 传递。

## 常见用法

```tsx
// 组合式卡片，图片在顶部，带操作区
<MyCard>
  <MyCard.Image src="/demo.png" />
  <MyCard.Header>新闻</MyCard.Header>
  <MyCard.Content>卡片内容...</MyCard.Content>
  <MyCard.Actions>
    <MyButton>阅读</MyButton>
  </MyCard.Actions>
</MyCard>

// 横向布局，带标签
<MyCard direction="horizontal">
  <MyCard.Tags>科技</MyCard.Tags>
  <MyCard.Content>横向内容</MyCard.Content>
</MyCard>

// 纯自定义内容
<MyCard bordered={false}>
  <h3>自定义内容</h3>
</MyCard>
```

## 进阶技巧

- 结合 `imagePosition` 实现多种图片布局。
- `hoverable` 控制悬停动画。
- `glass` 属性实现玻璃拟态。
- 可通过 `MyCard.Footer` 扩展底部内容。
- 通过组合子组件实现复杂结构。

更多高级用法请参考源码或 DEMOS.md。
