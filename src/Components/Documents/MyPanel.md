# MyPanel 组件文档

`MyPanel` 是一个通用的面板容器组件，用于组织和展示内容块，支持主题、禁用、标题/背景图/页脚插槽、动画与交互策略。

## Props（IMyPanelProps）

组合接口：ThemeProps、StyleProps、Disableable、WithTitle、WithImage、WithFooter、AnimationProps，并扩展 `interaction` 策略字段。

| Prop              | Type                                                     | 来自             | 描述 |
|-------------------|----------------------------------------------------------|------------------|------|
| `variant`         | `ComponentVariant`                                       | ThemeProps       | 主题变体 |
| `size`            | `'small' \| 'medium' \| 'large'`                         | ThemeProps       | 尺寸 |
| `glass`           | `boolean`                                                | ThemeProps       | 玻璃态 |
| `shadow`          | `ShadowName`                                             | ThemeProps       | 阴影等级 |
| `class`       | `string`                                                 | StyleProps       | 自定义类名 |
| `id`              | `string`                                                 | StyleProps       | 元素 ID |
| `disabled`        | `boolean`                                                | Disableable      | 是否禁用（可能影响内部交互） |
| `title`           | `React.ReactNode`                                        | WithTitle        | 标题插槽（通常显示在头部） |
| `backgroundImage` | `string`                                                 | WithImage        | 背景图 URL |
| `imagePosition`   | `'top' \| 'bottom' \| 'left' \| 'right' \| 'center' \| 'background'` | WithImage | 图片位置策略 |
| `footer`          | `React.ReactNode`                                        | WithFooter       | 页脚插槽 |
| `animation`       | `AnimationProp`                                          | AnimationProps   | 动画配置 |
| `interaction`     | `InteractionPolicy \| 'none' \| 'basic' \| 'rich' \| 'minimal'` | -          | 面板交互策略，支持预设 key 或自定义策略对象 |
| `children`        | `React.ReactNode`                                        | -                | 主要内容区域 |


