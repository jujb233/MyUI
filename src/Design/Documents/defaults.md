# `defaults/` 目录说明

路径：`src/Design/defaults`

目的：
- 存放设计系统的默认值（themeDefaults、defaultGroups 等），用于组件的默认配置和主题回退。

关键文件：
- `defaultGroups.ts`：通常定义一组逻辑分组（例如 spacing group、color group）或默认 token 组合。
- `themeDefaults.ts`：主题相关的默认值（颜色、字体、间距、边框等）。
- `index.ts`：汇总并导出默认配置。

快速查找指南：
- 想要改默认颜色或字体：打开 `themeDefaults.ts`。
- 想要调整分组（例如用于组件 prop 的默认分组）：查看 `defaultGroups.ts`。

示例（伪代码）：

```ts
// themeDefaults.ts
export const themeDefaults = {
  color: {
    primary: '#0070f3',
    secondary: '#666'
  },
  radius: {
    sm: '4px',
    md: '8px'
  }
};
```

注意事项：
- 修改默认值会在没有显式覆盖时影响所有组件。建议：在变更时同时更新文档与变更日志，并在 UI 层做回归测试。