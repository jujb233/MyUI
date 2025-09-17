# 组件文档

## MyButton

一个功能丰富的按钮组件，支持多种样式和状态。

### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `styleType` | `'primary' \| 'secondary' \| 'danger'` | - | 按钮样式类型 (必填) |
| `htmlType` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML 按钮类型 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `onClick` | `(e: MouseEvent) => void` | - | 点击事件处理器 |
| `children` | `ReactNode` | - | 按钮内容 |
| `className` | `string` | `''` | 自定义样式类名 |

### 示例

```tsx
import { MyButton } from '@jujb233/myui'

// 基础用法
<MyButton styleType="primary">
  主要按钮
</MyButton>

// 不同样式
<MyButton styleType="secondary">
  次要按钮
</MyButton>

<MyButton styleType="danger">
  危险操作
</MyButton>

// 禁用状态
<MyButton styleType="primary" disabled>
  禁用按钮
</MyButton>

// 表单提交
<MyButton styleType="primary" htmlType="submit">
  提交表单
</MyButton>

// 自定义样式
<MyButton 
  styleType="primary" 
  className="my-4 px-8"
  onClick={() => console.log('Clicked!')}
>
  自定义按钮
</MyButton>
```
