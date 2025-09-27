

# MyButton 教程

`MyButton` 是一个多功能、可主题化的按钮组件，支持玻璃材质、图标、不同尺寸和多种主题。推荐结合 `ButtonIcon` 进行组合式内容扩展。

## 快速开始

```tsx
import { MyButton, ButtonIcon } from 'myui';

<MyButton variant="solid">主按钮</MyButton>
```

## 核心属性

| 属性         | 类型                                 | 默认值      | 说明                   |
|--------------|--------------------------------------|-------------|------------------------|
| htmlType     | 'button' | 'submit' | 'reset'        | 'button'    | 原生按钮类别           |
| variant      | 'solid' | 'soft' | 'subtle' | 'text' | 'solid'    | 强度变体（视觉强烈程度）|
| color        | 预设色名或十六进制                  | 'blue'      | 色调（与变体解耦）      |
| size         | 'small' | 'medium' | 'large'         | 'medium'    | 按钮尺寸               |
| glass        | boolean                              | true        | 是否启用玻璃材质效果   |
| shadow       | 'sm' | 'md' | 'lg' 等                | 'sm'        | 按钮阴影               |
| disabled     | boolean                              | false       | 是否禁用               |
| onClick      | React.MouseEventHandler              | -           | 点击事件               |
| children     | ReactNode                            | -           | 按钮内容               |
| className    | string                               | ''          | 自定义类名             |

## 常见用法

```tsx
// 主题按钮（强度+色调）
<MyButton variant="solid" color="blue">确定</MyButton>

// 自定义 HEX，无玻璃效果
<MyButton variant="solid" color="#00bfae" glass={false}>自定义色</MyButton>

// 带图标按钮（推荐组合式写法）
<MyButton>
  <ButtonIcon name="plus" /> 新建
</MyButton>

// 禁用按钮
<MyButton disabled>不可用</MyButton>
```

## 进阶技巧

- 结合 `shadow` 属性实现多层次阴影。
- 通过 `className` 定制样式。
- 支持任意 React 节点作为内容。
- 可与 `ButtonIcon`、自定义内容组合。

更多高级用法请参考源码或 DEMOS.md。
