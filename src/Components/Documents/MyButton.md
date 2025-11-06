# MyButton 组件文档

`MyButton` 是一个功能完善的按钮组件，支持主题、样式、禁用、点击、图标、插槽和动画等配置。

## Props（IMyButtonProps）

`MyButton` 组合了多组通用接口：ThemeProps、StyleProps、Disableable、Clickable、WithIcon、WithOptions、HtmlButtonType、AnimationProps。

| Prop           | Type                                      | 来自             | 描述 |
|----------------|-------------------------------------------|------------------|------|
| `variant`      | `ComponentVariant`                        | ThemeProps       | 主题变体，如 `{ role: 'primary', color: 'blue' }` |
| `size`         | `'small' \| 'medium' \| 'large'`          | ThemeProps       | 尺寸 |
| `glass`        | `boolean`                                 | ThemeProps       | 是否启用玻璃态 |
| `shadow`       | `ShadowName`                              | ThemeProps       | 阴影等级 |
| `className`    | `string`                                  | StyleProps       | 自定义 CSS 类名 |
| `id`           | `string`                                  | StyleProps       | 元素唯一 ID |
| `disabled`     | `boolean`                                 | Disableable/Clickable | 是否禁用（两处接口均可提供该字段） |
| `clickable`    | `boolean`                                 | Clickable        | 是否呈现可点击态（配合交互样式） |
| `onClick`      | `(e: React.MouseEvent<HTMLButtonElement>) => void` | Clickable | 点击回调 |
| `icon`         | `React.ReactNode`                         | WithIcon         | 前置图标插槽 |
| `options`      | `React.ReactNode`                         | WithOptions      | 末尾操作区插槽（注意：名称为 `options`，非 `actions`） |
| `buttonType`   | `'button' \| 'submit' \| 'reset'`         | HtmlButtonType   | 原生 `<button>` 的 `type` 属性 |
| `animation`    | `AnimationProp`                           | AnimationProps   | 动画配置，支持字符串预设或对象配置 |
| `children`     | `React.ReactNode`                         | -                | 按钮内容 |
