# 组件总览与导航

本文档概览可用组件与通用 API 约定，便于快速定位到具体组件说明。

## 组件文档

- [MyButton](./MyButton.md)
- [MyCard](./MyCard.md)
- [MyNav](./MyNav.md)
- [MyPanel](./MyPanel.md)

## 可用组件

- [MyButton](./MyButton.md)：按钮，支持主题（role+color）/图标/尺寸/阴影。
- [MyCard](./MyCard.md)：卡片容器，支持图片、操作区、标签、横纵向布局等。
- [MyPanel](./MyPanel.md)：面板容器，支持标题、背景图、页脚扩展。
- [MyNav](./MyNav.md)：导航栏组件，支持品牌、菜单与动作区的组合。

## 通用类型与约定

组件 Props 按模块组合自以下接口定义，详见 `src/Interfaces/Documents`：

- Theme：`ThemeProps`、`AnimationProps`
- Core：`StyleProps`、`Disableable`、`Borderable`
- Behavior：`Clickable`、`InteractionBehavior`、`InteractionPolicy`
- Layout：`OrientationProps`、`WithIcon`、`WithOptions`、`WithTitle`、`WithFooter`、`WithImage`

本文档已同步当前 TypeScript API，如发现不一致欢迎提交 issue。

