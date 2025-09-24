
# 配置教程

本页介绍如何全局和局部配置 MyUI 主题与样式，快速实现自定义视觉效果。

## 快速配置

### 1. 全局主题配置

在入口文件（如 `App.tsx`）设置 CSS 变量，实现全局主题：

```css
:root {
  --bg: #f8fafc;
  --text: #222;
  --glass-bg: rgba(255,255,255,0.6);
}
```

### 2. 组件级主题配置

每个组件可通过 `variant`、`color` 属性快速切换主题：

```tsx
<MyButton variant="primary" color="#00bfae" />
<MyCard variant="glass" color="gradient-blue" />
```

### 3. 高级主题解析

使用 `resolveTheme` 动态生成主题对象：

```tsx
import { resolveTheme } from 'myui/styles';
const theme = resolveTheme({ variant: 'primary', color: 'teal' });
<div style={{ ...theme }}>内容</div>
```

## 常用配置示例

- 预设色：`color="primary"`、`color="danger"`
- 渐变色：`color="gradient-blue"`
- 玻璃拟态：`variant="glass"`
- 阴影：`shadow="lg"`

## 进阶技巧

- 通过 `src/styles/themes/colorPresets.ts` 添加自定义色。
- 修改 `src/styles/themes/themeBuilder.ts` 扩展主题逻辑。
- 结合 CSS 变量与 React props 实现多层次主题。

更多高级配置请参考源码或 DEMOS.md。
