# MyCard 组件

`MyCard` 是一个灵活的卡片容器组件。

## 属性说明

| 属性            | 类型                               | 默认值      | 说明                                        |
|-----------------|------------------------------------|--------------|-----------------------------------------------|
| `title`         | `React.ReactNode`                  | -            | 卡片标题                                    |
| `content`       | `React.ReactNode`                  | -            | 卡片主要内容                                 |
| `image`         | `string`                           | -            | 卡片图片 URL                                 |
| `imageAlt`      | `string`                           | `''`         | 图片替代文本                                 |
| `footer`        | `React.ReactNode`                  | -            | 卡片底部内容                                 |
| `actions`       | `React.ReactNode`                  | -            | 操作区（如按钮）                             |
| `tags`          | `React.ReactNode[]`                | -            | 标签数组                                     |
| `variant`       | `VariantName`                      | `'normal'`   | 卡片风格类型                                 |
| `color`         | `ColorPresetName | string`         | （依赖 variant） | 颜色预设或自定义十六进制颜色                   |
| `size`          | `CardSizeName`                     | `'medium'`   | 卡片尺寸                                     |
| `glass`         | `boolean`                          | `true`       | 是否启用玻璃拟态效果                          |
| `clickable`     | `boolean`                          | `false`      | 是否可点击                                   |
| `onClick`       | `React.MouseEventHandler<...>`     | -            | 点击事件处理函数                             |
| `className`     | `string`                           | `''`         | 自定义 CSS 类名                              |
| `bordered`      | `boolean`                          | `true`       | 是否显示边框                                 |
| `shadow`        | `ShadowName`                       | `'md'`       | 卡片阴影等级                                 |
| `imagePosition` | `'top' | 'left' | 'right' | 'background'` | `'top'` | 图片相对内容的位置                           |
| `direction`     | `'vertical' | 'horizontal'`       | `'vertical'` | 卡片内容布局方向                             |
| `hoverable`     | `boolean`                          | `true`       | 是否启用悬停效果                             |
| `children`      | `React.ReactNode`                  | -            | 自定义内容                                   |

## 用法示例

```tsx
import { MyCard, MyButton } from './MyUI';

<MyCard
  title="示例卡片"
  content="这是一些示例内容。"
  image="path/to/image.jpg"
  variant="primary"
  actions={
    <MyButton size="small">了解更多</MyButton>
  }
/>
```
