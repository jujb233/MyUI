# 样式工具

这些工具用于处理与样式、颜色、尺寸和 CSS 类名构建相关的逻辑。

## `colorUtils.ts`

一组用于处理颜色计算的纯函数。

-   `isHexColor(v: string)`: 检查字符串是否为有效的十六进制颜色。
-   `hexToRgb(hex: string)`: 将十六进制颜色转换为 RGB 对象。
-   `rgbToHex(r, g, b)`: 将 RGB 颜色值转换为十六进制字符串。
-   `adjustColorBrightness(hex: string, amount: number)`: 按指定量调整颜色的亮度。
-   `alphaFromHex(hex: string, a: number)`: 为十六进制颜色添加 Alpha 通道，返回 `rgba(...)` 字符串。
-   `yiqTextColor(hex: string)`: 根据背景颜色的亮度（YIQ 公式）确定应使用深色还是浅色文本。

## `sizeStyles.ts`

用于处理与尺寸相关的样式和令牌。

-   `getSizeTokens(size: SizeName)`: 根据尺寸名称（`'small'`, `'medium'`, `'large'`）获取一组设计令牌（如内边距、字体大小等）。
-   `buildPaddingStyle(tokens: SizeTokens)`: 根据尺寸令牌构建一个包含 `padding` 的样式对象。
-   `buildVerticalStackStyle(tokens: SizeTokens)`: 构建一个用于垂直堆叠布局的样式对象（使用 `flex` 和 `row-gap`）。
-   `mergeStyles(a, b)`: 浅合并两个样式对象。
-   `buildSizeStyle(props: { xLength?, yLength? })`: 根据 `xLength` 和 `yLength` 属性构建一个包含 `width` 和 `height` 的样式对象。

## `styleBuilder.ts`

提供一个链式调用的类名构建器，用于以编程方式创建复杂的 CSS 类名字符串。

### `styleBuilder.builder()`

创建一个 `ClassNameBuilder` 实例。

-   **`add(...classes)`**: 添加一个或多个 CSS 类。
-   **`add(condition, trueClasses, falseClasses?)`**: 根据条件添加 CSS 类。
-   **`addAnimation(animation)`**: 添加与动画相关的 CSS 类。
-   **`addInteraction(interaction)`**: 添加与交互状态（悬停、聚焦等）相关的 CSS 类。
-   **`build()`**: 构建并返回最终的 CSS 类名字符串。

**示例**:

```typescript
const className = styleBuilder.builder()
  .add('base-class')
  .add(isPrimary, 'primary-class', 'secondary-class')
  .addInteraction('scale')
  .build();
```

## `styleFactory.ts`

一个工厂函数，用于创建组件的基础样式。

### `createBaseStyle(options)`

根据一组选项（如 `variant`, `size`, `glass`, `shadow` 等）创建基础样式。

此函数负责：
1.  解析组件的变体（variant）、尺寸（size）、玻璃效果（glass）和阴影（shadow）。
2.  调用 `ensureThemeClass` 来获取或生成主题相关的 CSS 类。
3.  使用 `styleBuilder` 构建最终的 CSS 类名字符串。
4.  返回一个包含 `builder` 实例、尺寸配置和主题类名的结果对象。

-   **参数 (`options`)**:
    -   `variant`: 组件变体。
    -   `size`: 尺寸。
    -   `glass`: 是否启用玻璃效果。
    -   `shadow`: 阴影级别。
    -   `className`: 额外的 CSS 类。
    -   `disabled`: 是否禁用。
    -   `animation`: 动画配置。
    -   `interaction`: 交互配置。
-   **返回**: `CreateBaseStyleResult` 对象，包含 `builder` 实例和其他样式信息。
