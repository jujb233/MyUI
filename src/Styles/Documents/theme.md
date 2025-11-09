# theme.ts（样式/主题辅助）

位置：`src/Styles/config/theme.ts`

说明

- 该文件通常包含与主题相关的辅助映射或默认值，配合 `src/Options/Themes` 下的主题构建器使用。

关联

- `src/Options/Themes/themeBuilder.ts` 使用 `baseColors` 等数据来生成 `ComponentTheme`（一组 CSS 变量）。
- `src/Options/Themes/themeResolver.ts` 则负责把 `color`/`intensity` 等参数解析为最终的 `ComponentTheme`。

建议

- 把与视觉体系强相关但与组件逻辑无关的静态映射放在 `src/Styles/config`，以便在构建阶段或主题生成阶段复用。

示例：

```ts
// 可定义在 theme.ts 中的辅助值
export const DEFAULT_ACCENT = baseColors.blue.from
export const DARK_BG = baseColors.neutral.to
```

"如果需要，我可以把这些示例代码片段提取成小的 demo 文件并加入 `Demos/` 以便直观展示主题与样式如何结合。"