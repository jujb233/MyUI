

# MyPanel 教程

`MyPanel` 是一个通用内容容器组件，适合分组、布局和展示任意内容，支持玻璃拟态、背景图、标题、底部扩展等。推荐结合 PanelHeader、PanelContent、PanelFooter 进行内容扩展。

## 快速开始

```tsx
import { MyPanel, PanelHeader, PanelContent, PanelFooter } from 'myui';

<MyPanel title="探索新世界">
  <p>面板内容</p>
</MyPanel>
```

## 核心属性

| 属性             | 类型                                 | 默认值      | 说明                   |
|------------------|--------------------------------------|-------------|------------------------|
| variant          | 'normal' | 'primary' | 'danger' 等    | 'normal'    | 面板风格               |
| color            | 预设色名或自定义色                   | 依赖 variant| 主题/自定义颜色        |
| size             | 'small' | 'medium' | 'large'         | 'medium'    | 面板尺寸（内边距）     |
| glass            | boolean                              | true        | 是否启用玻璃拟态效果   |
| shadow           | 'sm' | 'md' | 'lg' 等                | 'md'        | 面板阴影               |
| disabled         | boolean                              | false       | 是否禁用               |
| title            | string                               | -           | 标题（顶部显示）       |
| backgroundImage  | string                               | -           | 背景图片 URL           |
| footer           | ReactNode                            | -           | 底部内容区域           |
| className        | string                               | ''          | 自定义类名             |
| children         | ReactNode                            | -           | 面板内容               |

## 常见用法

```tsx
// 带背景图和标题的大面板，底部扩展
<MyPanel 
  variant="primary" 
  size="large"
  title="探索新世界"
  backgroundImage="/demo.png"
  footer={<PanelFooter>底部内容</PanelFooter>}
>
  <PanelContent>
    <p>面板中的内容。</p>
  </PanelContent>
</MyPanel>

// 纯内容面板（可单独使用 PanelHeader/PanelContent/PanelFooter）
<MyPanel>
  <PanelHeader title="分组内容" />
  <PanelContent>
    <p>任意内容...</p>
  </PanelContent>
  <PanelFooter>自定义底部</PanelFooter>
</MyPanel>
```

## 进阶技巧

- 结合 `backgroundImage` 实现多样化视觉。
- `glass` 属性实现玻璃拟态。
- 通过 `className` 定制样式。
- 可通过 `footer` 属性或 `PanelFooter` 组件扩展底部内容。
- PanelHeader/PanelContent/PanelFooter 可单独组合使用。

更多高级用法请参考源码或 DEMOS.md。