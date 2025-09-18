# 组件文档

## MyButton

一个功能丰富的按钮组件，支持多种样式和状态。

### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `styleType` | `'primary' \| 'secondary' \| 'danger' \| 'normal' \| 'link'` | `'normal'` | 按钮样式类型 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| `htmlType` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML 按钮类型 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `glassMorphism` | `boolean` | `true` | 是否启用玻璃态效果 |
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
<MyButton styleType="secondary">次要按钮</MyButton>
<MyButton styleType="danger">危险操作</MyButton>
<MyButton styleType="normal">普通按钮</MyButton>
<MyButton styleType="link">链接样式</MyButton>

// 不同尺寸
<MyButton size="small" styleType="primary">小按钮</MyButton>
<MyButton size="medium" styleType="primary">中按钮</MyButton>
<MyButton size="large" styleType="primary">大按钮</MyButton>

// 玻璃态效果控制
<MyButton styleType="primary" glassMorphism={true}>玻璃态</MyButton>
<MyButton styleType="primary" glassMorphism={false}>传统样式</MyButton>

// 禁用状态
<MyButton styleType="primary" disabled>
  禁用按钮
</MyButton>

// 表单提交
<MyButton styleType="primary" htmlType="submit">
  提交表单
</MyButton>
```

---

## MyCard

一个现代化的卡片组件，支持多种布局和交互效果。

### Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `title` | `ReactNode` | - | 卡片标题 |
| `content` | `ReactNode` | - | 卡片内容 |
| `image` | `string` | - | 卡片图片URL |
| `imageAlt` | `string` | `''` | 图片替代文本 |
| `footer` | `ReactNode` | - | 页脚内容 |
| `actions` | `ReactNode` | - | 操作按钮 |
| `tags` | `ReactNode[]` | - | 标签数组 |
| `variant` | `'white' \| 'gray' \| 'primary' \| 'secondary'` | `'white'` | 卡片样式主题 |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | 卡片尺寸 |
| `glassMorphism` | `boolean` | `true` | 是否启用玻璃态效果 |
| `clickable` | `boolean` | `false` | 是否可点击 |
| `onClick` | `(e: MouseEvent) => void` | - | 点击事件处理器 |
| `className` | `string` | `''` | 自定义样式类名 |
| `bordered` | `boolean` | `true` | 是否显示边框 |
| `shadow` | `boolean` | `true` | 是否显示阴影 |
| `imagePosition` | `'top' \| 'left' \| 'right' \| 'background'` | `'top'` | 图片位置 |
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | 内容布局方向 |
| `hoverable` | `boolean` | `true` | 是否启用悬停效果 |
| `children` | `ReactNode` | - | 自定义子元素 |

### 示例

```tsx
import { MyCard, MyButton } from '@jujb233/myui'

// 基础卡片
<MyCard
  title="基础卡片"
  content="这是一个基础的卡片组件示例。"
/>

// 带图片的卡片
<MyCard
  title="产品卡片"
  content="这是一个产品展示卡片，包含图片和描述。"
  image="/product.jpg"
  imageAlt="产品图片"
  variant="primary"
  actions={
    <div className="flex gap-2">
      <MyButton styleType="primary">购买</MyButton>
      <MyButton styleType="secondary">详情</MyButton>
    </div>
  }
/>

// 水平布局卡片
<MyCard
  title="水平布局"
  content="图片在左侧，内容在右侧的水平布局。"
  image="/image.jpg"
  imagePosition="left"
  direction="horizontal"
  variant="secondary"
/>

// 带标签和页脚的卡片
<MyCard
  title="完整功能卡片"
  content="展示所有功能的完整卡片示例。"
  image="/feature.jpg"
  tags={["热门", "推荐", "新品"]}
  variant="primary"
  size="large"
  actions={
    <MyButton styleType="primary">立即查看</MyButton>
  }
  footer={
    <div className="flex justify-between">
      <span>价格: ¥299</span>
      <span className="text-green-600">有库存</span>
    </div>
  }
/>

// 可点击的卡片
<MyCard
  title="可点击卡片"
  content="整个卡片都可以点击。"
  clickable
  onClick={() => alert('卡片被点击了！')}
  variant="gray"
/>

// 自定义内容
<MyCard
  title="自定义内容"
  variant="white"
  size="large"
>
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
      <span>自定义元素</span>
    </div>
    <p>您可以在这里放置任何自定义内容。</p>
  </div>
</MyCard>

// 不同尺寸
<MyCard title="小卡片" content="紧凑设计" size="small" />
<MyCard title="中等卡片" content="标准设计" size="medium" />
<MyCard title="大卡片" content="宽松设计" size="large" />

// 不同主题
<MyCard title="白色主题" content="干净简洁" variant="white" />
<MyCard title="灰色主题" content="中性色调" variant="gray" />
<MyCard title="主色主题" content="品牌色彩" variant="primary" />
<MyCard title="次色主题" content="辅助色彩" variant="secondary" />

// 玻璃态效果对比
<MyCard
  title="玻璃态效果"
  content="现代毛玻璃背景效果"
  glassMorphism={true}
/>
<MyCard
  title="传统样式"
  content="经典实体背景效果"
  glassMorphism={false}
/>
```

### 设计特性

#### 响应式设计
- 自动适应不同屏幕尺寸
- 在移动设备上优化布局
- 支持flex布局和grid布局

#### 交互效果
- 平滑的悬停动画
- 优雅的点击反馈
- 可配置的交互状态

#### 视觉效果
- 玻璃态毛玻璃效果
- 精美的阴影和渐变
- 一致的设计语言

#### 可访问性
- 支持键盘导航
- ARIA 标签支持
- 语义化HTML结构
