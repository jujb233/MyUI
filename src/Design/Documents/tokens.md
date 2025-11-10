# `tokens/` 目录说明

路径：`src/Design/tokens`

目的：
- 存放设计系统的原子 token（基础颜色、spacing、字体、阴影、radius 等），是 Design 中最基础且最重要的部分。

关键文件：
- `base.ts`：定义基础 token（颜色变量、间距刻度、字体族等）。
- `index.ts`：可能会汇总并导出所有 tokens，同时处理 token 的类型定义。

快速查找：
- 想修改颜色或 spacing：查看 `tokens/base.ts`。
- 想新增 token：在 `base.ts` 中新增并在 `index.ts` 导出、更新类型文件。

示例（伪代码）：

```ts
export const baseTokens = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff4081'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px'
  }
};

export type Tokens = typeof baseTokens;
```

注意：
- 修改 token 会广泛影响 UI，请与设计师沟通并做好迁移文档。
- 推荐先在 `tokens` 中定义变量，再在 `themes` 中引用，最后在 `Styles` 或组件中使用。