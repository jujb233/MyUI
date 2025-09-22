# MyButton 组件

`MyButton` 是一个多功能、可主题化的按钮组件。

## 属性说明

| 属性      | 类型                               | 默认值    | 说明                                      |
|-----------|------------------------------------|------------|--------------------------------------------|
| `htmlType`| `'button' \| 'submit' \| 'reset'`    | `'button'` | 原生 HTML 按钮类型                        |
| `variant` | `VariantName`                      | `'normal'` | 按钮风格类型                              |
| `color`   | `ColorPresetName \| string`         | （依赖 variant） | 颜色预设或自定义十六进制颜色               |
| `size`    | `SizeName`                         | `'medium'` | 按钮尺寸                                  |
| `disabled`| `boolean`                          | `false`    | 是否禁用                                  |
| `onClick` | `React.MouseEventHandler<...>`     | -          | 点击事件处理函数                           |
| `children`| `React.ReactNode`                  | -          | 按钮内容                                  |
| `className`| `string`                          | `''`       | 自定义 CSS 类名                           |
| `glass`   | `boolean`                          | `true`     | 是否启用玻璃拟态效果                      |
| `shadow`  | `ShadowName`                       | `'sm'`     | 按钮阴影等级                              |

## 用法示例

```tsx
import { MyButton } from './MyUI';

// 主按钮
<MyButton variant="primary">点击我</MyButton>

// 次按钮，指定颜色且无玻璃效果
<MyButton variant="secondary" color="teal" glass={false}>提交</MyButton>

// 大号禁用链接按钮
<MyButton variant="link" size="large" disabled>禁用链接</MyButton>
```
