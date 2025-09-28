# Interfase 指南

本文档详细说明本库的“统一 API 接口（Interfase）”体系：它将组件的通用能力拆分为职责单一的小接口，以便在新组件中按需组合，保持一致的 Props、主题、交互与可访问性体验。

## 为什么使用 Interfase

- 统一：新组件通过组合相同的小接口，天然获得一致的 Props 命名与行为。
- 可维护：职责单一、清晰边界，类型与文档更易演进。
- 低心智：团队成员在开发与使用组件时，能快速预期 API 形状与默认值。

## 目录结构

源代码位置：`src/Components/MyUI/Interfase/`

- `theme.ts`：
  - `ThemeableProps`（variant/size/glass/shadow）
  - `ThemeContextValue`（Context 基本主题字段）
- `style.ts`：`StylableProps`（className/style/id）
- `state.ts`：`DisableableProps`
- `container.ts`：`BorderableProps`、`ClickableProps`
- `layout.ts`：`OrientationProps`、`MediaPlacementProps`
- `slots.ts`：`WithIconProps`、`WithActionsProps`、`WithTitleProps`、`WithFooterProps`、`WithBackgroundImageProps`
- `events.ts`：`PressableProps<T>`（onClick）
- `hook.ts`：`InteractionKind`、`UseComponentBaseResult`
- `button.ts`：`HtmlTypeProp`
- `polymorphic.ts`：`AsComponent`、`PolymorphicComponentProps`

包入口已做聚合导出：可直接从 `@jujb233/myui` 导入这些类型。

```ts
import type {
  ThemeableProps,
  StylableProps,
  DisableableProps,
  BorderableProps,
  ClickableProps,
  OrientationProps,
  MediaPlacementProps,
  WithIconProps,
  WithActionsProps,
  WithTitleProps,
  WithFooterProps,
  WithBackgroundImageProps,
  PressableProps,
  HtmlTypeProp,
} from '@jujb233/myui';
```

## 组合使用示例

- 交互型组件（如按钮）

```ts
export type MyActionProps =
  ThemeableProps &
  StylableProps &
  DisableableProps &
  PressableProps<HTMLButtonElement> &
  WithIconProps &
  WithActionsProps &
  HtmlTypeProp & {
    children?: React.ReactNode;
  };
```

- 容器型组件（如卡片/面板）

```ts
export type MyContainerProps =
  ThemeableProps &
  StylableProps &
  BorderableProps &
  ClickableProps &
  OrientationProps &
  MediaPlacementProps &
  PressableProps<HTMLDivElement> & {
    children?: React.ReactNode;
  };
```

## Hooks 返回值统一

库内 hooks 已提供统一别名：
- `rootStyle`（对应原先 `*Style`）
- `rootClasses`（对应原先 `*Classes`）

在新组件中推荐仅使用 `rootStyle/rootClasses`，避免历史命名差异带来的心智负担。

## Context 约定

- 每个组件的 Context 至少暴露 `ThemeContextValue` 字段：
  - `{ variant?, size, glass, shadow, disabled? }`
- 子组件消费 Context，不重复解析主题或尺寸。

## 可访问性（A11y）建议

- `clickable` 容器：
  - 添加 `role='button'` 与 `tabIndex=0`
  - 支持键盘 Enter/Space 触发 `onClick`
  - 显示焦点环（`focus-visible`），颜色来自 `--focus-ring`
- `disabled` 或 `isLoading` 时，阻断交互事件并提供一致的禁用样式

## 多态 as（可选）

- 对需要多态渲染的组件（如按钮/链接），可使用 `AsComponent` 与 `PolymorphicComponentProps`；
- 建议在设计上保持默认元素语义（button/a/div），按需提供 `as` 以覆盖。

## 迁移与命名映射

- 现有组件仍保留历史字段（如 `buttonStyle`、`cardStyle`），并提供 `rootStyle/rootClasses` 别名。
- 新增组件应直接使用统一命名，老组件可在后续重构中逐步收敛。

## 新组件清单（Checklist）

- 选择合适的组合接口构成 `Props`（Themeable/Styable/Disableable/...）
- 默认值只在实现层（组件/Hook）设置，不写进类型
- 使用 `useComponentStyle/useComponentClasses` 与主题系统对齐
- 根节点 className/style 最后合并（外部传入优先级最高）
- A11y：焦点环、键盘交互、aria 透传
- Context：Provider 提供主题/状态给子组件
- 导出：`default` + `Object.assign` 挂载子组件 + 导出 Props 类型

## 参考实现（简版骨架）

```ts
// MyBadge.tsx（示例骨架）
import React from 'react';
import type { ThemeableProps, StylableProps } from '@jujb233/myui';
import { useComponentStyle } from 'src/Hooks/useComponentStyle';
import { VARIANT_ROLE_STYLES } from 'src/Options';

export type MyBadgeProps = ThemeableProps & StylableProps & {
  children?: React.ReactNode;
};

export default function MyBadge({ variant, size = 'small', glass = true, shadow = 'none', className = '', style, children }: MyBadgeProps) {
  const role = variant?.role ?? 'secondary';
  const color = variant?.color ?? 'gray';
  const intensity = VARIANT_ROLE_STYLES[role];
  const { style: themed } = useComponentStyle({ variant: intensity, color, glass, shadow, bordered: true, elevationKind: 'card' });

  const rootStyle = { ...themed, ...(style || {}) } as React.CSSProperties;
  const rootClasses = `inline-flex items-center rounded-lg px-2 py-0.5 text-xs border text-[var(--text)] ${glass ? 'backdrop-blur-sm' : ''} ${className}`.trim();

  return <span className={rootClasses} style={rootStyle}>{children}</span>;
}
```

如需更深入的规范或样例，我可以为你的团队补充一份“黄金样例”组件（如 `MyBadge`）的完整实现与测试用例。