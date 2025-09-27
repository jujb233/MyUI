

# MyButton

`MyButton` 是支持主题与交互动效的按钮组件，内置玻璃态、阴影、尺寸与图标/操作区组合能力。

## 快速开始

```tsx
import { MyButton } from '@jujb233/myui';

<MyButton variant={{ role: 'primary', color: 'blue' }}>主按钮</MyButton>
```

## Props

- htmlType：`'button' | 'submit' | 'reset'`（默认 `'button'`）
- variant：`{ role: 'primary'|'secondary'|'success'|'warning'|'danger'|'text'; color: 预设色名 }`（可选）
- size：`'small' | 'medium' | 'large'`（默认 `'medium'`）
- glass：`boolean`（默认 `true`）
- shadow：`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'`（默认 `'sm'`）
- disabled：`boolean`（默认 `false`）
- icon：`ReactNode`（图标节点，自动出现在文本前）
- actions：`ReactNode`（操作区节点，自动出现在文本后）
- onClick：`React.MouseEventHandler<HTMLButtonElement>`
- children：`ReactNode`
- className：`string`

说明：传入 `icon` 会渲染 `ButtonIcon` 包裹的前置图标；传入 `actions` 会渲染 `ButtonActions` 包裹的后置元素。

## 用法示例

```tsx
// 主题与尺寸
<MyButton size="large" variant={{ role: 'primary', color: 'indigo' }}>确定</MyButton>

// 带图标/操作区
<MyButton icon={<PlusIcon />} actions={<Kbd>⌘K</Kbd>}>
  新建
</MyButton>

// 禁用
<MyButton disabled>不可用</MyButton>
```

提示：`shadow` 建议在按钮上使用 `sm` 或 `md`，获得更自然的动效与层次。
