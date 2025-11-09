# Interfaces 统一接口指南

本文件说明本库的“统一 API 接口（Interfaces）”体系：它将组件的通用能力拆分为职责单一的小接口，便于在新组件中按需组合，保持一致的 Props、主题、交互与可访问性体验。

> 注意：此文档已同步为使用 Solid（`solid-js`）的 JSX 类型。示例代码块中的 `JSX.Element` 均来自 `solid-js`。

## 模块文档

- [Core API](./core.md) — 组件核心（样式/颜色/尺寸/变体）
- [Behavior API](./behavior.md) — 交互/行为相关
- [Components API](./components.md) — 常用插槽与组件小接口
- [Layout API](./layout.md) — 布局/容器相关接口
- [Theme API](./theme.md) — 主题与动画相关接口

若发现文档与实际 TypeScript 定义不一致，请优先查看 `src/Interfaces/*.ts` 源码并提交 issue 或 PR。
# Interfaces 统一接口指南

本文件详细说明本库的“统一 API 接口（Interfase）”体系：它将组件的通用能力拆分为职责单一的小接口，便于在新组件中按需组合，保持一致的 Props、主题、交互与可访问性体验。

## 各模块文档

- [**Core API**](./core.md): 定义组件的核心能力，如事件、状态、样式等。
- [**Behavior API**](./behavior.md): 定义组件的行为，如自定义 Hook 和交互逻辑。
- [**Components API**](./components.md): 定义具体组件的通用接口。
- [**Layout API**](./layout.md): 定义布局、容器和插槽相关的接口。
- [**Theme API**](./theme.md): 定义主题和动画相关的接口。

提示：本文档已与源码中的 TypeScript 定义保持同步；如发现不一致，欢迎提 issue 反馈。
