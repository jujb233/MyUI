# `interaction/` 目录说明

路径：`src/Design/interaction`

目的：
- 存放与交互相关的工具、策略或抽象（例如手势处理、键盘交互策略、焦点管理等）。

关键文件：
- `index.ts`：导出交互层的工具和类型。

快速查找：
- 想排查某个交互不生效（例如键盘事件）：从 `interaction/index.ts` 找到具体实现并追踪到组件引用。
- 想新增交互策略：在此目录新增模块并在 `index.ts` 导出。

示例（伪代码）：

```ts
// focusManager.ts
export function trapFocus(el: HTMLElement) { /* ... */ }

// index.ts
export * from './focusManager';
```

注意事项：
- 交互工具可能会跨组件复用，变更前要关注兼容性与可访问性（a11y）。
