# `animations/` 目录说明

路径：`src/Design/animations`

目的：
- 存放动画相关的集合与可复用动画定义（例如 keyframes、animation helpers）。
- 供组件或样式系统统一引用以保证动画风格一致。

关键文件：
- `index.ts`：导出动画工具或预定义动画名称/配置。

快速定位
- 新增动画：在 `animations` 下创建新文件（例如 `fade.ts`），在 `index.ts` 中导出。
- 修改现有动画：查看 `index.ts` 中的命名导出，找到对应实现文件。

常见使用场景：
- 组件进入/退出动画
- hover/focus 等交互期的过渡效果

示例（伪代码）：

```ts
// src/Design/animations/fade.ts
export const fadeIn = {
  name: 'fade-in',
  keyframes: 'from { opacity: 0 } to { opacity: 1 }',
  duration: '200ms'
};

// src/Design/animations/index.ts
export { fadeIn } from './fade';
```

注意：动画实现可能使用 CSS 或 JS（CSS-in-JS / PostCSS / Tailwind 动画类），请根据项目中 `vite` 配置和样式策略选型。