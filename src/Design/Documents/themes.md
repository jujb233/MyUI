# `themes/` 目录说明

路径：`src/Design/themes`

目的：
- 定义并导出主题（themes）集合、角色（roles）与主题相关工具，支持多主题切换与主题合成。

关键文件：
- `index.ts`：主题集合或导出入口。
- `roles.ts`：定义主题角色（例如 `surface`, `background`, `primary`, `onPrimary` 等）映射。

快速查找：
- 想修改主题颜色映射或角色名称：查看 `roles.ts`。
- 想添加新主题：在 `themes` 中新增主题定义并在 `index.ts` 导出。

示例（伪代码）：

```ts
// roles.ts
export const roles = {
  primary: 'color-primary',
  onPrimary: 'color-on-primary'
};

// index.ts
import { roles } from './roles';
export const lightTheme = { /* 基于 roles 的颜色 */ };
export const darkTheme = { /* ... */ };
export default { lightTheme, darkTheme };
```

注意事项：
- 主题通常依赖 `tokens` 提供的原子值，修改时注意 token 与主题之间的映射关系。
- 若使用 CSS variables 建议通过 token -> variable -> theme 的链路保持清晰。