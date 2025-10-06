

# MyButton

`MyButton` 是支持主题与交互动效的按钮组件，内置玻璃态、阴影、尺寸与图标/操作区组合能力。

## 快速开始

```tsx
import { MyButton } from '@jujb233/myui';

<MyButton variant={{ role: 'primary', color: 'blue' }}>主按钮</MyButton>
```

## Props

- buttonType：`'button' | 'submit' | 'reset'`（默认 `'button'`）
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
 - animation：`AnimationProp`（可选） — 控制入场/强调动画，会被 `useAnimation` 映射为 className。

说明：传入 `icon` 会渲染 `ButtonIcon` 包裹的前置图标；传入 `actions` 会渲染 `ButtonActions` 包裹的后置元素。

## 交互（Interaction）

- 默认行为：组件内部使用库的交互预设（默认为 `rich`），会开启 hover/focus/active/transition 等视觉反馈，除非处于 `disabled` 状态。
- 可控性：当前 `MyButton` 组件没有对外暴露 `interaction` 策略 prop（内部通过 `useMyButton` 使用默认策略），但 `disabled` 会关闭绝大多数交互效果。
- 实现细节：内部使用 `buildHookInteractionClasses`（来自 `useInteraction`）结合 `INTERACTION_PRESETS` 生成最终的 className，且会与 `useAnimation` 结果一起拼接到 `className` 上。

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
