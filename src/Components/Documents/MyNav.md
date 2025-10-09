# MyNav 组件文档

`MyNav` 是一个导航栏组件，用于在页面顶部提供导航链接、品牌信息和操作按钮。

## Props

`MyNav` 组件的 Props 组合了主题、样式、内容插槽和动画等多种配置。

| Prop        | Type                               | 描述                                       |
|-------------|------------------------------------|--------------------------------------------|
| `variant`   | `ComponentVariant`                 | 主题变体，用于控制导航栏的颜色和强度。     |
| `size`      | `'small' \| 'medium' \| 'large'`   | 导航栏的尺寸。                             |
| `glass`     | `boolean`                          | 是否启用玻璃态效果。                       |
| `shadow`    | `ShadowName`                       | 导航栏的阴影等级。                         |
| `className` | `string`                           | 自定义 CSS 类名。                          |
| `id`        | `string`                           | 元素的唯一 ID。                            |
| `title`     | `React.ReactNode`                  | 导航栏的标题内容。                         |
| `actions`   | `React.ReactNode`                  | 在导航栏末尾显示一个操作区域。             |
| `animation` | `AnimationProp`                    | 控制组件的动画效果。                       |
| `children`  | `React.ReactNode`                  | 导航栏的主要内容（通常是品牌或 Logo）。    |
| `menu`      | `React.ReactNode`                  | 导航栏的菜单内容。                         |


