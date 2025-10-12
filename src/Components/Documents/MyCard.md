# MyCard 组件文档

`MyCard` 是一个灵活的卡片容器，用于展示内容与操作，支持横纵向布局、主题、交互与动画。

## Props（IMyCardProps）

组合接口：ThemeProps、StyleProps、Borderable、OrientationProps、Clickable<HTMLDivElement>、AnimationProps、InteractionBehavior、WithFooter、WithImage、WithTitle。

| Prop              | Type                                                 | 来自                   | 描述 |
|-------------------|------------------------------------------------------|------------------------|------|
| `variant`         | `ComponentVariant`                                   | ThemeProps             | 主题变体 |
| `size`            | `'small' \| 'medium' \| 'large'`                     | ThemeProps             | 尺寸 |
| `glass`           | `boolean`                                            | ThemeProps             | 玻璃态 |
| `shadow`          | `ShadowName`                                         | ThemeProps             | 阴影等级 |
| `className`       | `string`                                             | StyleProps             | 自定义类名 |
| `id`              | `string`                                             | StyleProps             | 元素 ID |
| `bordered`        | `boolean`                                            | Borderable             | 是否显示边框 |
| `direction`       | `'vertical' \| 'horizontal'`                         | OrientationProps       | 内容方向 |
| `clickable`       | `boolean`                                            | Clickable              | 是否呈现可点击态 |
| `onClick`         | `(e: React.MouseEvent<HTMLDivElement>) => void`      | Clickable              | 点击回调 |
| `animation`       | `AnimationProp`                                      | AnimationProps         | 动画配置 |
| `hover`           | `boolean`                                            | InteractionBehavior    | 是否启用 hover 反馈 |
| `focus`           | `boolean`                                            | InteractionBehavior    | 是否启用 focus 反馈 |
| `active`          | `boolean`                                            | InteractionBehavior    | 是否启用 active 反馈 |
| `transition`      | `boolean`                                            | InteractionBehavior    | 交互状态切换是否带过渡 |
| `disabled`        | `boolean`                                            | InteractionBehavior    | 禁用时是否关闭交互反馈（与 Disableable 无直接关联） |
| `footer`          | `React.ReactNode`                                    | WithFooter             | 页脚插槽 |
| `title`           | `React.ReactNode`                                    | WithTitle              | 标题插槽 |
| `backgroundImage` | `string`                                             | WithImage              | 背景图 URL（作为卡片背景） |
| `imagePosition`   | `'top' \| 'bottom' \| 'left' \| 'right' \| 'center' \| 'background'` | WithImage | 图片位置策略 |
| `children`        | `React.ReactNode`                                    | -                      | 内容区域 |

说明：`InteractionBehavior` 为可选能力，若未提供则遵循组件默认交互策略。

## 子组件 API（挂载在 MyCard 上）

子组件均作为属性挂载在默认导出的 `MyCard` 组件上：

```tsx
import MyCard from '../Components/MyCard'

<MyCard backgroundImage="/demo.png">
  <MyCard.Tags tags={["React", "TypeScript"]} />
  <MyCard.Header>示例标题</MyCard.Header>
  <MyCard.Content>主要内容</MyCard.Content>
  <MyCard.Actions>
    <button>操作</button>
  </MyCard.Actions>
</MyCard>
```

额外：如需独立前景图层，可使用 `<MyCard.Image src="..." />`，当 `imagePosition="center"` 时将以绝对定位覆盖并以低不透明度铺满容器。

## 迁移提示

- 旧版可能使用命名导入的子组件；当前推荐通过 `MyCard.XXX` 访问。
- `imagePosition` 可选值补充了 `'bottom'` 与 `'center'`。



