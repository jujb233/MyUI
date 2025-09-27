

# MyCard

`MyCard` 是组合式卡片容器，支持图片、标签、操作区、页脚、横纵向布局与玻璃态。

## 快速开始

```tsx
import { MyCard, MyButton } from '@jujb233/myui';

<MyCard variant={{ role: 'secondary', color: 'blue' }} size="medium" glass>
  <MyCard.Image src="/demo.png" alt="示例图片" />
  <MyCard.Header>示例卡片</MyCard.Header>
  <MyCard.Content>这是一段内容。</MyCard.Content>
  <MyCard.Actions>
    <MyButton size="small">了解更多</MyButton>
  </MyCard.Actions>
  <MyCard.Tags tags={["科技"]} />
  <MyCard.Footer>底部说明</MyCard.Footer>
  {/* 亦支持 imagePosition="background" 做背景图 */}
</MyCard>
```

## Props（根组件）

- variant：`{ role: 'primary'|'secondary'|'success'|'warning'|'danger'|'text'; color: 预设色名 }`
- size：`'small' | 'medium' | 'large'`（默认 `'medium'`）
- glass：`boolean`（默认 `true`）
- clickable：`boolean`（默认 `false`）
- className：`string`
- bordered：`boolean`（默认 `true`）
- shadow：`'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'`（默认 `'md'`）
- imagePosition：`'top' | 'left' | 'right' | 'background'`（默认 `'top'`）
- direction：`'vertical' | 'horizontal'`（默认 `'vertical'`）
- hoverable：`boolean`（默认 `true`）
- onClick：`(e) => void`
- children：组合子组件

## 子组件与 Props

- `MyCard.Image`：`{ src: string; alt?: string }`，根据 `imagePosition` 自动选择背景图或 <img>。
- `MyCard.Header`：`{ children; className? }`
- `MyCard.Content`：`{ children; className? }`
- `MyCard.Actions`：`{ children; className? }`
- `MyCard.Tags`：`{ tags: ReactNode[]; className? }`（注意：需以数组传入）
- `MyCard.Footer`：`{ children; className? }`

## 示例

```tsx
// 图片在左，横向布局
<MyCard imagePosition="left" direction="horizontal" className="max-w-lg">
  <MyCard.Image src="/vite.svg" />
  <MyCard.Header>标题</MyCard.Header>
  <MyCard.Content>内容</MyCard.Content>
  <MyCard.Footer>页脚</MyCard.Footer>
</MyCard>

// 作为背景图使用
<MyCard imagePosition="background">
  <MyCard.Image src="/demo.png" />
  <MyCard.Header>覆盖在背景图之上</MyCard.Header>
</MyCard>

// 阴影与玻璃态对比
<MyCard shadow="lg" glass={false}>
  <MyCard.Header>实体阴影</MyCard.Header>
</MyCard>
<MyCard shadow="lg" glass>
  <MyCard.Header>玻璃态</MyCard.Header>
</MyCard>
```
