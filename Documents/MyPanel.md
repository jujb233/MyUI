# MyPanel - 面板组件

用于区域划分与内容承载，支持多主题、玻璃态、尺寸、阴影等现代化视觉效果。

## 组件特性
- 🎨 主题色支持：primary、secondary、danger、normal
- 🌟 玻璃态效果可选
- 📏 尺寸配置：small、medium、large
- 🕶️ 阴影可选
- 🚫 禁用状态

## 基础用法
```tsx
import { MyPanel } from '@jujb233/myui'

<MyPanel theme="primary" size="large" glassMorphism>
  <h2>标题</h2>
  <p>内容区域，可放任意 React 节点。</p>
</MyPanel>
```

## 属性说明
| 属性           | 类型                                      | 说明                 |
|----------------|-------------------------------------------|----------------------|
| theme          | 'primary' \| 'secondary' \| 'danger' \| 'normal' | 主题色类型           |
| size           | 'small' \| 'medium' \| 'large'            | 尺寸类型             |
| glassMorphism  | boolean                                   | 是否启用玻璃态效果   |
| shadow         | boolean                                   | 是否显示阴影         |
| className      | string                                    | 自定义类名           |
| children       | React.ReactNode                           | 面板内容             |
| disabled       | boolean                                   | 是否禁用             |

## 设计理念
- 高级材质与光影，提升区域层次感
- 响应式设计，适配多种场景
- 细腻动画与过渡，增强交互体验

## 场景示例
- 内容分区、卡片容器、弹窗主体、仪表盘区块等

## 进阶用法
```tsx
<MyPanel theme="danger" size="small" shadow={false}>
  <span>警告内容</span>
</MyPanel>
```

---

**MyPanel** 让内容承载更美观、更有层次。