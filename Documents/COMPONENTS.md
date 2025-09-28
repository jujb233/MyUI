# 组件总览与导航

本文档概览可用组件与通用 API 约定，便于快速定位到具体组件说明。

> 想了解“统一 API 接口（Interfase）”及如何为新组件定义一致的 Props？请阅读 [INTERFASE.md](./INTERFASE.md)。

## 可用组件

- [MyButton](./MyButton.md)：按钮，支持主题（role+color）/图标/尺寸/阴影。
- [MyCard](./MyCard.md)：卡片容器，支持图片、操作区、标签、横纵向布局等。
- [MyPanel](./MyPanel.md)：面板容器，支持标题、背景图、页脚扩展。
 - [MyNav](./MyNav.md)：导航栏组件，支持品牌、菜单与动作区的组合。

注：仓库中还包含导航栏组件 MyNav（源码位于 `src/Components/MyUI/MyNav`），如需文档可在后续版本补充。

## 通用 API 约定

以下属性在大多数组件中通用：

- variant：对象形式的主题配置，结构为 `{ role, color }`
	- role 可选：`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text'`
	- color 可选：`'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'gray'`
- size：`'small' | 'medium' | 'large'`（默认 `'medium'`）
- glass：是否启用玻璃态效果，`boolean`（默认 `true`）
- shadow：阴影等级，`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'`

主题原则：变体与颜色解耦（role=功能语义，color=色调），并在玻璃态下自动应用合适的投影与过渡。

## 建议阅读顺序

1. 本页了解全局约定
2. 跳转到具体组件文档（按钮/卡片/面板）
3. 参考 DEMOS.md 结合示例尝试组合使用
