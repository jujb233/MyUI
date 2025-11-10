# `src/Design/index.ts` — 入口与导出说明

位置：`src/Design/index.ts`

目的：
- 作为 `Design` 模块的公共入口，统一导出主题、样式、tokens 与工具方法。
- 提供可在组件中直接导入的高层 API（例如 `createTheme`、`themeDefaults`、tokens 等）。

常见导出（示例，实际以代码为准）：
- `themes`：主题集合或主题工厂
- `tokens`：基础 token、颜色与 spacing 定义
- `styles`：全局样式或样式变体的导入点
- `defaults`：组件默认配置与分组

如何查找修改点：
1. 如果想改变全局设计规范（spacing、颜色、radius），先看 `tokens/index.ts` 和 `tokens/base.ts`。
2. 如果要扩展或替换主题实现，查看 `themes/index.ts` 与 `themes/roles.ts`。
3. 如果要调整全局或组件样式导出，查看 `Styles/index.ts` 与 `Styles/myui/variants.css`。

示例：在组件中使用设计 token

```ts
import { tokens } from 'src/Design';

const primary = tokens.colors.primary;
```

备注：本文件通常不会包含业务逻辑，只做出口整理；若需要理解具体实现，请逐个打开子目录中的 `index.ts` 文件。