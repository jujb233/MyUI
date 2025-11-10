# `Styles/` 目录说明

路径：`src/Design/Styles`

目的：
- 存放全局样式入口、样式变体与工具样式（例如 `myui` 的 CSS 变体文件）。

关键文件：
- `index.ts`：可能汇总并导出样式相关的 helper 或将 CSS 引入构建入口。
- `myui/variants.css`：包含 myui 的样式变体（颜色/尺寸/状态等的 CSS 类或 CSS 变量覆盖）。

快速定位：
- 想修改组件全局样式：优先查看 `Styles/myui/variants.css`。
- 想查看样式在构建中的导入位置：查看 `Styles/index.ts` 与 `src/Design/index.ts` 的导出关系。

示例：在 `variants.css` 中增加新变体

```css
/* myui/variants.css */
.myui-btn--ghost {
  background: transparent;
  border: 1px solid var(--color-border);
}
```

注意：
- CSS 可能受 Tailwind/PostCSS/预处理器影响；修改时确认构建能正确处理该 CSS 文件。
- 优先使用 design tokens（来自 `tokens`）来保持一致性，而不是硬编码 color 或 spacing。