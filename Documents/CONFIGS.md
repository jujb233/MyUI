
# 配置与主题

本页说明如何在组件层面定制主题与样式，以及如何使用内置主题工具进行更细致的控制。

## 组件级主题配置（推荐）

在本库中，主题通过 `variant` 对象传入，形如 `{ role, color }`。

示例：

```tsx
import { MyButton, MyCard } from '@jujb233/myui';

// 语义为主操作（primary），色调为 blue
<MyButton variant={{ role: 'primary', color: 'blue' }} />

// 柔和风格的容器，语义 secondary，色调 green
<MyCard variant={{ role: 'secondary', color: 'green' }} />
```

可选值：

- role：`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text'`
- color 预设（组件 props 当前支持）：`'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'gray'`
  - 说明：源码中预设表更丰富（见 `src/Options/Themes/colorPresets.ts`），但对外组件 props 的颜色类型目前收敛为以上六种，便于保证一致性与类型安全。

其他通用属性：

- size：`'small' | 'medium' | 'large'`
- glass：`boolean`（默认 true）
- shadow：`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'`

## 使用主题工具（可选进阶）

- 组件内部已封装主题解析与交互态，通常无需手动调用底层工具。
- 如需了解主题构建细节，可阅读：
  - `src/Options/Themes/themeResolver.ts`
  - `src/Options/Themes/themeBuilder.ts`
  - `src/Options/Utils/componentTheme.ts` 与 `useComponentTheme.ts`
 这些工具在库内部使用，外部应用一般不直接导入。

## 添加/调整颜色预设

- 预设定义位于 `src/Options/Themes/colorPresets.ts` 的 `COLOR_BASE`。新增颜色只需添加一项 `{ from, to }`，其四种强度会自动生成。
- 强度列表在 `src/Options/Themes/colorThemes.ts` 的 `INTENSITY` 中声明。
- 渐变与玻璃态规则见 `src/Options/Themes/themeBuilder.ts`（`buildThemeByIntensity`）。

## 阴影与玻璃态

- 阴影等级定义在 `src/Options/Styles/styleConstants.ts`，玻璃态下的特制阴影见 `src/Options/Styles/elevation.ts`。
- 组件的 `glass` 与 `shadow` 会共同影响投影与过渡，建议在卡片/面板上使用 `md/lg` 做对比，按钮使用 `sm/md` 更自然。

## 统一 API 接口（Interfase）

为避免新组件的 Props API 分散不一致，仓库提供了一组“可组合接口”，按职责拆分并统一从包顶层导出，便于直接复用。

- 目录：`src/Components/MyUI/Interfase/`
  - `theme.ts`：`ThemeableProps`、`ThemeContextValue`
  - `style.ts`：`StylableProps`
  - `state.ts`：`DisableableProps`
  - `container.ts`：`BorderableProps`、`ClickableProps`
  - `layout.ts`：`OrientationProps`、`MediaPlacementProps`
  - `slots.ts`：`WithIconProps`、`WithActionsProps`、`WithTitleProps`、`WithFooterProps`、`WithBackgroundImageProps`
  - `events.ts`：`PressableProps<T>`
  - `hook.ts`：`InteractionKind`、`UseComponentBaseResult`
  - `button.ts`：`HtmlTypeProp`
  - `polymorphic.ts`：`AsComponent`、`PolymorphicComponentProps`

顶层导入（已在包入口聚合导出）：

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

在新组件中组合使用（示例）：

```ts
// 交互型组件（如按钮）
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

// 容器型组件（如卡片/面板）
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

Hooks 返回值命名统一：

- 库内 hooks 已提供 `rootStyle` 与 `rootClasses` 别名（对应原先的 `*Style` 与 `*Classes`）。
- 你可以在新组件中直接基于 `rootStyle/rootClasses` 书写，无需关心具体组件的历史命名差异。
