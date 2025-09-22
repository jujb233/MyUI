# 样式与主题系统

本系统已重构，结构更清晰、易扩展、易维护。所有样式相关文件均位于 `src/styles` 目录。

## 关键概念

### 1. CSS 变量

核心采用 CSS 变量（Custom Properties），组件通过预设变量实现样式，而非直接在 React 中写内联样式。

-   `--bg`：背景色/渐变
-   `--bg-hover`：悬停时背景
-   `--text`：文字颜色
-   `--border`：边框颜色
-   `--focus-ring`：聚焦描边色
-   `--glass-bg`：玻璃拟态背景
-   `--glass-bg-hover`：玻璃拟态悬停背景
-   `--glass-border`：玻璃拟态边框

### 2. 主题解析（`resolveTheme`）

`src/styles/themes/themeResolver.ts` 中的 `resolveTheme` 是主题解析核心。传入参数（如 `variant`、`color`、`isCard`），返回包含 CSS 变量的主题对象。

### 3. 颜色预设

所有颜色预设定义在 `src/styles/themes/colorPresets.ts`，包括渐变起止色，由 `themeBuilder.ts` 构建主题对象。

### 4. 结构分离

-   **`utils/`**：纯工具函数，如 `colorUtils.ts` 负责颜色处理。
-   **`themes/`**：主题相关逻辑。
    -   `colorPresets.ts`：原始颜色值。
    -   `themeBuilder.ts`：主题构建函数。
    -   `themeResolver.ts`：组件获取主题的入口。
-   **`index.ts`**：样式模块的公共 API，只导出组件所需内容。

## 使用方法

组件中只需调用 `resolveTheme`，将结果展开到 `style` 属性：

```tsx
import { resolveTheme } from '../../styles';

const theme = resolveTheme({ variant, color });

return <div style={{ ...theme }} />;
```

组件 CSS（如 `index.css`）使用这些变量：

```css
.my-component {
  background: var(--bg);
  color: var(--text);
}
```
