# MyButton 组件文档

`MyButton` 是一个功能丰富的按钮组件，支持主题、样式、禁用、点击、图标、动作等多种配置。

## Props

`MyButton` 组件的 Props 继承自多个接口，提供了丰富的定制能力。

| Prop         | Type                               | 描述                                                                                                                            |
|--------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `variant`    | `ComponentVariant`                 | 主题变体，用于控制按钮的颜色和强度。例如 `{ role: 'primary', color: 'blue' }`。                                                 |
| `size`       | `'small' \| 'medium' \| 'large'`   | 按钮的尺寸。                                                                                                                    |
| `glass`      | `boolean`                          | 是否启用玻璃态材质。                                                                                                            |
| `shadow`     | `ShadowName`                       | 按钮的阴影等级。                                                                                                                |
| `className`  | `string`                           | 自定义 CSS 类名。                                                                                                               |
| `id`         | `string`                           | 元素的唯一 ID。                                                                                                                 |
| `disabled`   | `boolean`                          | 是否禁用按钮。                                                                                                                  |
| `onClick`    | `React.MouseEventHandler`          | 点击事件处理函数。                                                                                                              |
| `icon`       | `React.ReactNode`                  | 在按钮内容前显示一个图标。                                                                                                      |
| `actions`    | `React.ReactNode`                  | 在按钮内容后显示一个操作区域。                                                                                                  |
| `buttonType` | `'button' \| 'submit' \| 'reset'`  | HTML `<button>` 元素的原生 `type` 属性。                                                                                        |
| `animation`  | `AnimationProp`                    | 控制组件的动画效果，可以是预设名称字符串或详细配置对象。例如 `animation="fade"` 或 `animation={{ type: 'slide-up' }}`。 |
| `children`   | `React.ReactNode`                  | 按钮的内容。                                                                                                                    |

