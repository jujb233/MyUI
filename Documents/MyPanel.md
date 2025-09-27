

# MyPanel

`MyPanel` 是通用内容容器，支持标题、背景图、页脚扩展与玻璃态，适合分组与布局。

## 快速开始

```tsx
// 注意：仓库内演示通过相对路径导入 MyPanel
// 应用作为依赖时，顶层包当前未导出 MyPanel（后续可能提供）
import MyPanel from '../src/Components/MyUI/MyPanel';
import { PanelHeader, PanelContent, PanelFooter } from '../src/Components/MyUI/MyPanel';

<MyPanel title="探索新世界">
  <p>面板内容</p>
</MyPanel>
```

## Props

- variant：`{ role: 'primary'|'secondary'|'success'|'warning'|'danger'|'text'; color: 预设色名或 HEX }`
- size：`'small' | 'medium' | 'large'`（默认 `'medium'`）
- glass：`boolean`（默认 `true`）
- shadow：`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'`（默认 `'md'`）
- className：`string`
- disabled：`boolean`（默认 `false`）
- title：`string`（渲染在内置 `PanelHeader` 中）
- backgroundImage：`string`（作为背景图样式应用）
- footer：`ReactNode`（存在时渲染于内置 `PanelFooter` 中）
- children：内容（默认包裹在内置 `PanelContent`）

## 子组件

- `PanelHeader`：`{ title?: string }`
- `PanelContent`：`{ children? }`
- `PanelFooter`：`{ children? }`

## 示例

```tsx
// 带背景图和标题的大面板
<MyPanel 
  variant={{ role: 'primary', color: 'teal' }}
  size="large"
  title="探索新世界"
  backgroundImage="/demo.png"
  footer={<PanelFooter>底部内容</PanelFooter>}
>
  <PanelContent>
    <p>面板中的内容。</p>
  </PanelContent>
</MyPanel>

// 自定义组合（也可直接使用内置 Header/Content/Footer）
<MyPanel>
  <PanelHeader title="分组内容" />
  <PanelContent>
    <p>任意内容...</p>
  </PanelContent>
  <PanelFooter>自定义底部</PanelFooter>
</MyPanel>
```