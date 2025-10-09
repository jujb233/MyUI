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


