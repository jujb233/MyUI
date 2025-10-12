# 样式

`Styles` 目录包含了用于定义组件视觉表现的各种预设和工具函数，例如尺寸、阴影（层级感）和样式常量。

导出入口：`src/Options/Styles/index.ts`（可通过 `../Styles` 聚合导入）。

---

## 样式常量 (`styleConstants.ts`)

该文件定义了在整个库中复用的核心样式值。

### `DEFAULT_STYLES`

提供了一些特殊状态下的默认样式：

-   **`disabled`**: 组件禁用时的背景、文字和填充颜色。
-   **`glass`**: “玻璃态”效果下的文字颜色。

### `SHADOWS`

定义了一组标准的阴影（`box-shadow`）效果，用于创建界面的层级感。

-   **可用级别**: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `inner`, `none`。
-   **示例**: `SHADOWS.md` 会返回一个中等强度的阴影样式。

### `GLASS_SHADOWS`

为“玻璃态”组件提供了特殊的阴影效果，以增强其通透感。

-   **可用级别**: `md`, `lg`。

---

## 尺寸配置 (`sizeConfig.ts`)

为了确保组件在不同场景下具有一致的尺寸表现，我们定义了统一的尺寸配置。

### `SIZE_CONFIG`

这是一个包含 `small`, `medium`, `large` 三种尺寸预设的对象。每种尺寸都详细定义了适用于不同组件的样式属性：

-   **通用属性**:
    -   `padding`: 内边距
    -   `fontSize`: 字体大小
    -   `minWidth`: 最小宽度
    -   `borderRadius`: 边框圆角
-   **特定属性** (例如用于 `MyCard`):
    -   `spacing`: 内部元素间距
    -   `titleSize`: 标题字体大小
    -   `contentSize`: 内容字体大小
    -   `minHeight`: 最小高度

这使得我们可以通过一个简单的 `size` 属性（如 `size="small"`）来控制组件的整体大小和布局。

---

## 层级感 (`elevation.ts`)

该文件通过 `resolveElevation` 函数来动态解析组件应使用的阴影效果。

### `resolveElevation(params)`

这是一个智能解析函数，它根据传入的参数返回最合适的 `box-shadow` 值。

-   **参数**:
    -   `glass?: boolean`: 是否为“玻璃态”。如果为 `true`，将使用 `GLASS_SHADOWS`。
    -   `shadow?: ShadowName`: 指定一个在 `SHADOWS` 中定义的阴影级别（默认为 `md`）。
    -   `kind?: 'button' | 'card' | 'panel'`: 组件的类型。在“玻璃态”下，不同类型的组件可能会有不同的阴影效果。

-   **逻辑**:
    1.  如果 `glass` 为 `true`，则根据 `kind` 从 `GLASS_SHADOWS` 中选择合适的阴影。
    2.  否则，直接从 `SHADOWS` 中返回指定的 `shadow` 值。

这个函数使得阴影的管理更加集中和灵活，能够轻松应对不同组件和状态下的视觉需求。返回值为可直接用于 `style={{ boxShadow: ... }}` 的字符串。
