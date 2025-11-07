# MyNav 组件文档

`MyNav` 是一个导航栏组件，用于在页面顶部提供导航链接、品牌信息与操作。

## Props（IMyNavProps）

组合接口：ThemeProps、StyleProps、WithTitle、WithOptions、AnimationProps，并扩展交互策略字段。

| Prop                 | Type                                     | 来自             | 描述 |
|----------------------|------------------------------------------|------------------|------|
| `variant`            | `ComponentVariant`                       | ThemeProps       | 主题变体 |
| `size`               | `'small' \| 'medium' \| 'large'`         | ThemeProps       | 尺寸 |
| `glass`              | `boolean`                                | ThemeProps       | 玻璃态 |
| `shadow`             | `ShadowName`                             | ThemeProps       | 阴影等级 |
| `class`          | `string`                                 | StyleProps       | 自定义类名 |
| `id`                 | `string`                                 | StyleProps       | 元素 ID |
| `title`              | `React.ReactNode`                        | WithTitle        | 标题插槽（左侧/中部品牌区域） |
| `options`            | `React.ReactNode`                        | WithOptions      | 末尾操作区插槽（注意：名称为 `options`） |
| `animation`          | `AnimationProp`                          | AnimationProps   | 动画配置 |
| `children`           | `React.ReactNode`                        | -                | 自由内容区（通常是品牌/Logo） |
| `menu`               | `React.ReactNode`                        | -                | 菜单区插槽 |
| `interaction`        | `InteractionProp`                         | -                | 交互策略或预设 key（如 `'rich'`/`'basic'`/`'none'`），等价于传入完整 `InteractionPolicy` 对象或预设 key |

> 破坏性更新：`interactionEnabled` 已移除，请使用 `interaction={{ enabled: true, ... }}` 或预设 key 开启/设置交互。


