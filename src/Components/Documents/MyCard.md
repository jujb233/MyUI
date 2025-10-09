# MyCard 组件文档

`MyCard` 是一个灵活的卡片组件，用于展示内容和操作。它支持多种布局、主题和交互状态。

## Props

`MyCard` 组件的 Props 继承自多个接口，提供了丰富的定制能力。

| Prop              | Type                                           | 描述                                                     |
|-------------------|------------------------------------------------|----------------------------------------------------------|
| `variant`         | `ComponentVariant`                             | 主题变体，用于控制卡片的颜色和强度。                     |
| `size`            | `'small' \| 'medium' \| 'large'`               | 卡片的尺寸。                                             |
| `glass`           | `boolean`                                      | 是否启用玻璃态效果。                                     |
| `shadow`          | `ShadowName`                                   | 卡片的阴影等级。                                         |
| `className`       | `string`                                       | 自定义 CSS 类名。                                        |
| `id`              | `string`                                       | 元素的唯一 ID。                                          |
| `bordered`        | `boolean`                                      | 是否显示边框。                                           |
| `clickable`       | `boolean`                                      | 卡片是否可点击（会添加悬停等交互效果）。                 |
| `hoverable`       | `boolean`                                      | 是否启用悬停反馈。                                       |
| `direction`       | `'vertical' \| 'horizontal'`                   | 内容的布局方向。                                         |
| `imagePosition`   | `'top' \| 'left' \| 'right' \| 'background'`   | 图片或媒体内容的位置。                                   |
| `onClick`         | `React.MouseEventHandler<HTMLDivElement>`      | 点击事件处理函数。                                       |
| `animation`       | `AnimationProp`                                | 控制组件的动画效果。                                     |
| `footer`          | `React.ReactNode`                              | 卡片的页脚内容。                                         |
| `backgroundImage` | `string`                                       | 设置卡片的背景图片 URL。                                 |
| `title`           | `React.ReactNode`                              | 卡片的标题内容。                                         |
| `children`        | `React.ReactNode`                              | 卡片的主要内容。                                         |

## 组合式子组件

为了提升组合性，子组件现在作为命名导出提供（不再挂载在 `MyCard` 对象上）。你可以这样导入并使用：

```tsx
import MyCard, { CardHeader, CardContent, CardFooter, CardActions, CardTags } from '../Components/MyCard'

<MyCard backgroundImage="/demo.png">
	<CardTags tags={["React", "TypeScript"]} />
	<CardHeader>示例标题</CardHeader>
	<CardContent>主要内容</CardContent>
	<CardActions>
		<button>操作</button>
	</CardActions>
</MyCard>
```

注意：旧的写法 `MyCard.Header` / `MyCard.Image` 已废弃并移除，请将代码迁移为上面的组合式用法或使用 `backgroundImage` prop 来传入背景图片。

## 迁移提示

- 将 `<MyCard.Image src="..." />` 改为在 `MyCard` 上使用 `backgroundImage="..."`。
- 将 `MyCard.Header`、`MyCard.Content`、`MyCard.Footer`、`MyCard.Actions`、`MyCard.Tags` 改为从包中命名导入并直接使用相应组件。



