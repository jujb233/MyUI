# Styles 文档

本目录记录 `src/Styles` 下的基础样式配置与常量，供组件作者与主题构建器参考。

主要文件

- `config/base.ts` — 基础变量（颜色、间距、字体尺寸、圆角、阴影、尺寸预设等）。
- `config/animation.ts` — 动画相关的映射与类型（`animationMap`, `easingValueMap`, `AnimationConfig` 等）。
- `config/interaction.ts` — 交互状态默认类与常量（若有）。
- `config/tailwind.ts` — 将基础变量转换为 Tailwind 配置或在构建时注入的工具函数。
- `config/theme.ts` — 与样式相关的主题辅助变量/映射（辅助使用）。

子文档：

- [base](./base.md)
- [animation](./animation.md)
- [interaction](./interaction.md)
- [tailwind](./tailwind.md)
- [theme](./theme.md)

备注：这些文档侧重说明导出名称、用途与常见使用方式，并提供小示例，便于在 `Options` 层（如 `src/Options/Themes`）或组件中引用。