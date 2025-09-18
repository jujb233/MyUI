# MyUI 组件演示

这里展示了 MyUI 组件库中所有组件的实际效果和交互演示。

## 🎮 在线演示

访问 [本地开发服务器](http://localhost:5173/) 查看完整的交互式演示。

## 📱 组件演示列表

### 🔘 MyButton - 按钮组件演示

**演示内容：**
- ✨ 玻璃水晶材质效果展示
- 🎨 传统材质样式对比
- 📏 三种尺寸变化演示
- 🔗 链接按钮样式展示
- ⚡ 交互功能演示
- 🎭 样式类型完整对比

**核心特性展示：**

#### 1. 材质效果对比
```tsx
// 玻璃水晶材质（默认）
<MyButton styleType="primary">玻璃态按钮</MyButton>

// 传统材质
<MyButton styleType="primary" glassMorphism={false}>传统按钮</MyButton>
```

#### 2. 样式类型展示
```tsx
<MyButton styleType="primary">Primary</MyButton>
<MyButton styleType="secondary">Secondary</MyButton>
<MyButton styleType="danger">Danger</MyButton>
<MyButton styleType="normal">Normal</MyButton>
<MyButton styleType="link">Link Style</MyButton>
```

#### 3. 尺寸变化
```tsx
<MyButton size="small" styleType="primary">小按钮</MyButton>
<MyButton size="medium" styleType="primary">中按钮</MyButton>
<MyButton size="large" styleType="primary">大按钮</MyButton>
```

#### 4. 交互功能
```tsx
// 点击事件
<MyButton onClick={() => alert('按钮被点击!')}>点击测试</MyButton>

// 表单按钮
<MyButton htmlType="submit" styleType="primary">提交表单</MyButton>

// 禁用状态
<MyButton disabled styleType="primary">禁用按钮</MyButton>
```

---

### 🎴 MyCard - 卡片组件演示

**演示内容：**
- 🏷️ 基础卡片展示
- 🖼️ 不同尺寸卡片对比
- 🔄 布局方向演示
- 🌟 玻璃态效果对比
- 🎯 完整功能演示

**核心特性展示：**

#### 1. 基础卡片
```tsx
<MyCard
  title="基础卡片"
  content="展示标题和内容的基本布局"
  actions={
    <div className="flex gap-2">
      <MyButton size="small" styleType="primary">操作</MyButton>
      <MyButton size="small" styleType="secondary">详情</MyButton>
    </div>
  }
/>
```

#### 2. 带图片卡片
```tsx
<MyCard
  title="产品展示"
  content="包含图片的产品展示卡片"
  image="/product.jpg"
  imageAlt="产品图片"
  variant="primary"
  tags={["新功能", "推荐"]}
/>
```

#### 3. 水平布局
```tsx
<MyCard
  title="水平布局"
  content="图片和内容水平排列"
  image="/image.jpg"
  imagePosition="left"
  direction="horizontal"
/>
```

#### 4. 可点击卡片
```tsx
<MyCard
  title="可点击卡片"
  content="整个卡片都可以点击"
  clickable
  onClick={() => alert('卡片被点击了!')}
/>
```

#### 5. 完整功能卡片
```tsx
<MyCard
  title="功能完整的卡片"
  content="展示所有可用功能的完整示例"
  image="/demo.jpg"
  variant="primary"
  size="large"
  tags={["热门", "推荐", "新品"]}
  actions={
    <div className="flex gap-2">
      <MyButton styleType="primary">立即购买</MyButton>
      <MyButton styleType="secondary">加入购物车</MyButton>
      <MyButton styleType="link">收藏</MyButton>
    </div>
  }
  footer={
    <div className="flex justify-between">
      <span>价格: ¥999</span>
      <span className="text-green-600">库存充足</span>
    </div>
  }
/>
```

## 🎨 设计展示

### 色彩主题
在演示中可以看到：
- **Primary**：紫蓝渐变，用于主要操作
- **Secondary**：青蓝渐变，用于次要操作  
- **Danger**：红色渐变，用于危险操作
- **Normal**：灰色渐变，用于普通操作
- **White/Gray**：卡片背景色主题

### 材质效果
- **玻璃态效果**：毛玻璃背景 + 渐变边框
- **传统材质**：纯色背景 + 经典阴影
- **悬停动画**：缩放 + 位移 + 阴影变化

### 响应式设计
- **移动端适配**：组件在小屏幕上的表现
- **平板适配**：中等屏幕的布局调整
- **桌面端**：大屏幕的完整体验

## 📋 演示场景

### 1. 电商产品页
```tsx
// 产品卡片 + 购买按钮组合
<MyCard
  title="iPhone 15 Pro Max"
  content="搭载 A17 Pro 芯片，钛金属设计"
  image="/iphone.jpg"
  variant="primary"
  tags={["新品", "热销", "AppleCare+"]}
  actions={
    <div className="flex gap-2">
      <MyButton styleType="primary" size="large">
        ¥9999 立即购买
      </MyButton>
      <MyButton styleType="secondary">
        加入购物车
      </MyButton>
    </div>
  }
/>
```

### 2. 管理后台仪表板
```tsx
// 数据统计卡片组合
<div className="grid grid-cols-4 gap-4">
  <MyCard title="今日访问" content="12,345" size="small" />
  <MyCard title="新增用户" content="1,234" size="small" />
  <MyCard title="转化率" content="23.5%" size="small" />
  <MyCard title="总收入" content="¥456,789" size="small" />
</div>
```

### 3. 社交媒体卡片
```tsx
// 用户资料卡片
<MyCard
  title="个人资料"
  variant="white"
  glassMorphism={true}
>
  <div className="flex items-center gap-4">
    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
    <div>
      <h3>John Doe</h3>
      <p>前端开发工程师</p>
    </div>
  </div>
</MyCard>
```

### 4. 文章内容卡片
```tsx
// 博客文章卡片
<MyCard
  title="MyUI 设计系统深度解析"
  content="探索现代化组件库的设计理念与技术实现"
  image="/article-cover.jpg"
  imagePosition="top"
  tags={["设计系统", "React", "UI/UX"]}
  actions={
    <div className="flex gap-2">
      <MyButton styleType="primary">阅读全文</MyButton>
      <MyButton styleType="link">分享</MyButton>
    </div>
  }
  footer={
    <div className="text-sm text-gray-600">
      发布于 2024-01-15 · 阅读量 2.3k
    </div>
  }
/>
```

## 🔧 交互功能展示

### 悬停效果
- **按钮悬停**：颜色变化 + 缩放动画
- **卡片悬停**：提升效果 + 阴影变化
- **链接悬停**：下划线 + 颜色渐变

### 点击反馈
- **按钮点击**：缩放动画 + 触觉反馈
- **卡片点击**：整体点击区域
- **事件冒泡**：正确的事件处理

### 状态变化
- **禁用状态**：视觉反馈 + 交互禁用
- **加载状态**：待实现的加载动画
- **选中状态**：视觉高亮显示

## 📱 响应式演示

### 移动端（< 768px）
- 卡片垂直堆叠
- 按钮全宽显示
- 文字大小适配

### 平板端（768px - 1024px）
- 2列网格布局
- 适中的间距
- 平衡的视觉比例

### 桌面端（> 1024px）
- 3-4列网格布局
- 完整的悬停效果
- 最佳的视觉体验

## 🚀 如何运行演示

### 1. 启动开发服务器
```bash
cd /path/to/MyUI
npm run dev
```

### 2. 访问演示页面
打开浏览器访问：`http://localhost:5173/`

### 3. 交互测试
- 尝试点击不同的按钮
- 悬停查看动画效果
- 调整浏览器窗口测试响应式
- 使用键盘 Tab 键测试可访问性

## 🎯 演示亮点

### 视觉效果
- **玻璃态设计**：现代毛玻璃背景效果
- **渐变色彩**：莫奈风格的色彩搭配
- **精美动画**：流畅的过渡和变换

### 交互体验
- **即时反馈**：实时的视觉反馈
- **直觉操作**：符合用户习惯的交互
- **无障碍支持**：键盘导航和屏幕阅读器友好

### 技术展示
- **TypeScript**：完整的类型安全
- **响应式**：各种屏幕尺寸适配
- **性能优化**：高效的渲染和更新

---

**体验地址：** [http://localhost:5173/](http://localhost:5173/)  
**源码查看：** [Demo.tsx](../src/Demo.tsx)

用心打造的每一个细节，期待您的体验和反馈！
