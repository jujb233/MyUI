# MyPanel 组件文档

`MyPanel` 是一个通用的面板容器组件，用于组织和展示内容块。它支持丰富的自定义选项，包括主题、尺寸、阴影、背景图以及交互效果。

## Props

`MyPanel` 组件的 Props 定义如下：

| Prop              | Type                                                     | 描述                                                                 |
|-------------------|----------------------------------------------------------|----------------------------------------------------------------------|
| `variant`         | `ComponentVariant`                                       | 主题变体，用于控制面板的颜色和强度。                                 |
| `size`            | `'small' \| 'medium' \| 'large'`                         | 面板的尺寸，默认为 `'medium'`。                                      |
| `glass`           | `boolean`                                                | 是否启用玻璃态效果，默认为 `true`。                                  |
| `shadow`          | `ShadowName`                                             | 面板的阴影等级，默认为 `'md'`。                                      |
| `className`       | `string`                                                 | 自定义 CSS 类名。                                                    |
| `id`              | `string`                                                 | 元素的唯一 ID。                                                      |
| `disabled`        | `boolean`                                                | 是否禁用面板（例如，禁用内部交互），默认为 `false`。                 |
| `title`           | `React.ReactNode`                                        | 面板的标题内容，会显示在 `PanelHeader` 中。                          |
| `backgroundImage` | `string`                                                 | 设置面板的背景图片 URL。                                             |
| `footer`          | `React.ReactNode`                                        | 面板的页脚内容，会显示在 `PanelFooter` 中。                          |
| `animation`       | `AnimationProp`                                          | 控制组件的动画效果。                                                 |
| `interaction`     | `InteractionPolicy \| 'none' \| 'basic' \| 'rich' \| 'minimal'` | 定义面板的交互策略，可以是预设值或自定义 `InteractionPolicy` 对象。 |
| `children`        | `React.ReactNode`                                        | 面板的主要内容，会显示在 `PanelContent` 中。                         |


