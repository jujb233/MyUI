# MyCard 组件

一个现代化的卡片组件，支持多种布局和交互效果。

## 特性

- 🎴 完整的内容区域支持（标题、内容、图片、标签）
- 🔄 多种布局方向（垂直、水平）
- 📍 灵活的图片位置（顶部、左侧、右侧、背景）
- 🎨 主题拆分：`variant`（风格）+ `color`（颜色键），统一来自配置
- 📏 三种尺寸配置（small、medium、large）
- ⚡ 丰富的交互效果（悬停、点击）
- 🌟 可切换的玻璃态效果
- ♿ 完善的可访问性支持

## Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `title` | `ReactNode` | - | 卡片标题 |
| `content` | `ReactNode` | - | 卡片内容 |
| `image` | `string` | - | 卡片图片URL |
| `imageAlt` | `string` | `''` | 图片替代文本 |
| `footer` | `ReactNode` | - | 页脚内容 |
| `actions` | `ReactNode` | - | 操作按钮 |
| `tags` | `ReactNode[]` | - | 标签数组 |
| `variant` | `'primary' \| 'secondary' \| 'danger' \| 'normal'` | `'normal'` | 卡片风格 |
| `color` | `ColorPresetName` | 依据 `DEFAULT_VARIANT_PRESET[variant]` | 颜色键（来自 COLORS） |
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

## 基础用法

```tsx
import { MyCard } from '@jujb233/myui'

function App() {
  return (
    <MyCard
      title="基础卡片"
      content="这是一个基础的卡片组件示例。"
    />
  )
}
```

相关导出：`VARIANTS`, `COLORS`, `DEFAULT_VARIANT_PRESET`, `resolveUnifiedCardTheme`

## 样式主题

### White（白色主题）
```tsx
<MyCard
  title="白色主题"
  content="干净简洁的白色背景"
  variant="normal"
  color="white"
/>
```

### Gray（灰色主题）
```tsx
<MyCard
  title="灰色主题"
  content="中性色调的灰色背景"
  variant="normal"
  color="gray"
/>
```

### Primary（主色主题）
```tsx
<MyCard
  title="主色主题"
  content="品牌主色彩背景"
  variant="primary"
  color="indigo"
/>
```

### Secondary（次色主题）
```tsx
<MyCard
  title="次色主题"
  content="辅助色彩背景"
  variant="secondary"
  color="cyanBlue"
/>
```

## 尺寸配置

```tsx
// 小尺寸
<MyCard
  title="小卡片"
  content="紧凑的卡片设计"
  size="small"
/>

// 中等尺寸（默认）
<MyCard
  title="中等卡片"
  content="标准的卡片设计"
  size="medium"
/>

// 大尺寸
<MyCard
  title="大卡片"
  content="宽松的卡片设计"
  size="large"
/>
```

## 图片支持

### 顶部图片
```tsx
<MyCard
  title="产品卡片"
  content="产品描述信息"
  image="/product.jpg"
  imageAlt="产品图片"
  imagePosition="top"
/>
```

### 水平布局
```tsx
// 图片在左侧
<MyCard
  title="水平布局"
  content="图片在左侧的水平布局"
  image="/image.jpg"
  imagePosition="left"
  direction="horizontal"
/>

// 图片在右侧
<MyCard
  title="水平布局"
  content="图片在右侧的水平布局"
  image="/image.jpg"
  imagePosition="right"
  direction="horizontal"
/>
```

### 背景图片
```tsx
<MyCard
  title="背景图片"
  content="图片作为背景显示"
  image="/background.jpg"
  imagePosition="background"
/>
```

## 交互功能

### 可点击卡片
```tsx
<MyCard
  title="可点击卡片"
  content="整个卡片都可以点击"
  clickable
  onClick={() => {
    console.log('卡片被点击了!')
  }}
/>
```

### 悬停效果
```tsx
// 启用悬停效果（默认）
<MyCard
  title="悬停效果"
  content="鼠标悬停时会有动画效果"
  hoverable={true}
/>

// 禁用悬停效果
<MyCard
  title="静态卡片"
  content="没有悬停动画效果"
  hoverable={false}
/>
```

## 操作按钮

```tsx
import { MyButton } from '@jujb233/myui'

<MyCard
  title="操作卡片"
  content="包含操作按钮的卡片"
  actions={
    <div className="flex gap-2">
      <MyButton variant="primary" color="indigo">主要操作</MyButton>
      <MyButton variant="secondary" color="cyanBlue">次要操作</MyButton>
    </div>
  }
/>
```

## 标签系统

```tsx
<MyCard
  title="标签卡片"
  content="带有标签的卡片示例"
  tags={["热门", "推荐", "新品"]}
/>
```

## 页脚内容

```tsx
<MyCard
  title="页脚卡片"
  content="包含页脚信息的卡片"
  footer={
    <div className="flex justify-between">
      <span>价格: ¥299</span>
      <span className="text-green-600">有库存</span>
    </div>
  }
/>
```

## 玻璃态效果

```tsx
// 启用玻璃态效果（默认）
<MyCard
  title="玻璃态效果"
  content="现代毛玻璃背景效果"
  glassMorphism={true}
/>

// 禁用玻璃态效果
<MyCard
  title="传统样式"
  content="经典实体背景效果"
  glassMorphism={false}
/>
```

## 自定义内容

```tsx
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
    <div className="border-t pt-4">
      <h4 className="font-medium">更多信息</h4>
      <ul className="list-disc list-inside text-sm mt-2">
        <li>支持任意React组件</li>
        <li>完全可定制的布局</li>
        <li>响应式设计支持</li>
      </ul>
    </div>
  </div>
</MyCard>
```

## 完整示例

```tsx
import React from 'react'
import { MyCard, MyButton } from '@jujb233/myui'

function CardDemo() {
  const handleCardClick = () => {
    alert('卡片被点击了!')
  }

  const handleActionClick = (action: string) => {
    console.log(`执行${action}操作`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* 基础卡片 */}
      <MyCard
        title="基础卡片"
        content="展示基本的标题和内容信息。"
        variant="white"
      />

      {/* 带图片的卡片 */}
      <MyCard
        title="产品展示"
        content="这是一个产品展示卡片，包含图片、标题、描述和操作按钮。"
        image="/product.jpg"
        imageAlt="产品图片"
        variant="primary"
        tags={["热销", "推荐"]}
        actions={
          <div className="flex gap-2">
            <MyButton 
              styleType="primary" 
              size="small"
              onClick={() => handleActionClick('购买')}
            >
              立即购买
            </MyButton>
            <MyButton 
              styleType="secondary" 
              size="small"
              onClick={() => handleActionClick('收藏')}
            >
              收藏
            </MyButton>
          </div>
        }
        footer={
          <div className="flex justify-between items-center text-sm">
            <span className="font-bold text-lg">¥299</span>
            <span className="text-green-600">库存充足</span>
          </div>
        }
      />

      {/* 可点击卡片 */}
      <MyCard
        title="可点击卡片"
        content="点击整个卡片区域可以触发事件。"
        variant="secondary"
        clickable
        onClick={handleCardClick}
        footer={
          <div className="text-center text-sm text-gray-600">
            点击试试 →
          </div>
        }
      />

      {/* 水平布局卡片 */}
      <MyCard
        title="水平布局"
        content="图片和内容采用水平排列的布局方式。"
        image="/image.jpg"
        imagePosition="left"
        direction="horizontal"
        variant="gray"
        className="md:col-span-2"
      />

      {/* 自定义内容卡片 */}
      <MyCard
        title="用户资料"
        variant="white"
        size="large"
        className="lg:col-span-1"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">JD</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-gray-600">john@example.com</p>
              <p className="text-sm text-gray-500">前端开发工程师</p>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">最近活动</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• 完成了 React 项目重构</li>
              <li>• 提交了 3 个 Pull Request</li>
              <li>• 参与了代码评审会议</li>
            </ul>
          </div>

          <div className="flex gap-2 pt-4">
            <MyButton 
              styleType="primary" 
              size="small"
              onClick={() => handleActionClick('编辑')}
            >
              编辑资料
            </MyButton>
            <MyButton 
              styleType="link" 
              size="small"
              onClick={() => handleActionClick('查看')}
            >
              查看详情
            </MyButton>
          </div>
        </div>
      </MyCard>
    </div>
  )
}

export default CardDemo
```

## 设计特性

### 响应式设计
- **自适应布局**：自动适应不同屏幕尺寸
- **弹性网格**：支持flex和grid布局系统
- **断点优化**：在移动设备上优化显示效果

### 交互效果
- **平滑动画**：300ms的缓动过渡效果
- **悬停反馈**：提升(translateY)和缩放效果
- **点击反馈**：即时的视觉和触觉反馈

### 视觉效果
- **玻璃态设计**：现代毛玻璃背景效果
- **精美阴影**：多层次的阴影系统
- **渐变色彩**：莫奈风格的渐变配色

### 可访问性
- **语义化结构**：正确的HTML语义
- **键盘导航**：完整的Tab键导航支持
- **ARIA标签**：screen reader友好
- **颜色对比**：符合WCAG标准

## 技术特性

- ✅ TypeScript 完整类型支持
- ✅ 响应式设计
- ✅ Tree-shaking 友好
- ✅ 零外部依赖（除React和clsx）
- ✅ 服务端渲染支持
- ✅ 现代浏览器兼容

## 最佳实践

### 内容组织
- 保持标题简洁明了
- 内容描述控制在2-3行以内
- 合理使用标签突出重点信息

### 交互设计
- 重要操作使用primary按钮
- 次要操作使用secondary或link按钮
- 避免在一个卡片中放置过多操作按钮

### 布局选择
- 内容较多时使用垂直布局
- 展示类内容可考虑水平布局
- 背景图片适合品牌或装饰性内容

### 性能优化
- 大量卡片时考虑虚拟滚动
- 图片使用适当的尺寸和格式
- 避免在悬停事件中执行复杂计算
