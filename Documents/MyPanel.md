# MyPanel 组件

`MyPanel` 是一个通用内容容器组件。

## 属性说明

| 属性      | 类型                               | 默认值    | 说明                                      |
|-----------|------------------------------------|------------|--------------------------------------------|
| `variant` | `VariantName`                      | `'normal'` | 面板风格类型                              |
| `color`   | `ColorPresetName | string`         | （依赖 variant） | 颜色预设或自定义十六进制颜色               |
| `size`    | `SizeName`                         | `'medium'` | 面板尺寸，影响内边距                      |
| `disabled`| `boolean`                          | `false`    | 是否禁用                                  |
| `className`| `string`                          | `''`       | 自定义 CSS 类名                           |
| `glass`   | `boolean`                          | `true`     | 是否启用玻璃拟态效果                      |
| `shadow`  | `ShadowName`                       | `'md'`     | 面板阴影等级                              |
| `children`| `React.ReactNode`                  | -          | 面板内容                                  |
| `title`   | `string`                           | -          | 面板标题，会以 h2 标签显示在内容顶部      |
| `backgroundImage` | `string`                     | -          | 背景图片的 URL                            |

## 用法示例

```tsx
import { MyPanel } from './MyUI';

// 带有背景图片和标题的面板
<MyPanel 
  variant="primary" 
  size="large"
  title="探索新世界"
  backgroundImage="/path/to/your/image.png"
>
  <p>面板中的内容。</p>
</MyPanel>
```