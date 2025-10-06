# MyNav

`MyNav` 是一个简洁的导航栏组件，支持主题（role+color）、尺寸、玻璃态与阴影，并提供 NavBrand / NavContent / NavMenu / NavActions 等子组件以便组合布局。

> 注意：当前包顶层未导出 MyNav。仓库内或本地演示请使用相对路径导入；如作为独立包使用，后续版本将考虑导出。

## 导入与快速开始

```tsx
// 仓库内/本地示例（相对路径）
import MyNav, { NavBrand, NavContent, NavMenu, NavActions } from '../src/Components/MyUI/MyNav';

// 简单用法：通过 props 直接渲染品牌、菜单与动作区
<MyNav
  variant={{ role: 'primary', color: 'blue' }}
  title={<strong>MyUI</strong>}
  menu={(
    <>
      <li>指南</li>
      <li>组件</li>
      <li>主题</li>
    </>
  )}
  actions={<button className="px-3 py-1 rounded">登录</button>}/>
```

也可使用子组件进行完全自定义：

```tsx
<MyNav variant={{ role: 'secondary', color: 'purple' }}>
  <NavBrand>MyUI</NavBrand>
  <NavContent>
    <NavMenu>
      <li>Docs</li>
      <li>Playground</li>
    </NavMenu>
    {/* 这里还可以放搜索框、面包屑等 */}
  </NavContent>
  <NavActions>
    <button className="px-3 py-1 rounded">Sign In</button>
  </NavActions>
</MyNav>
```

## Props 快速检索（类型与默认值）

- variant?: `ComponentVariant`（默认无）
  - 结构：`{ role: VariantRole; color: Color }`
  - VariantRole：`'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'text'`
  - Color：`'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'gray'`
- size?: `SizeName`（默认 `'medium'`）
  - `'small' | 'medium' | 'large'`
- glass?: `boolean`（默认 `true`）
- shadow?: `ShadowName`（默认 `'sm'`）
  - `'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'`
- className?: `string`（默认 `''`）
- title?: `React.ReactNode`（有值时自动渲染 `NavBrand`）
- menu?: `React.ReactNode`（有值时在 `NavContent` 内渲染 `NavMenu`）
- actions?: `React.ReactNode`（有值时渲染 `NavActions`）
- children?: `React.ReactNode`（在 `NavContent` 内与 `menu` 并列渲染）
 - animation?: `AnimationProp`（可选）— 控制入场/强调动画，会被 `useAnimation` 映射为 className。

说明：
- 组件内部使用 `useMyNav` 结合主题系统生成 `navStyle`（CSS 变量）与 `navClasses`（类名），并通过 Context 将 variant/size/glass/shadow 传递给子组件。
- 你可以通过 `className` 叠加外部类，或在 children 中自定义更多结构。

## 子组件

- `NavBrand`：`{ children?: React.ReactNode }`，品牌区（左侧）。
- `NavContent`：`{ children?: React.ReactNode }`，主内容区（中部）。
- `NavMenu`：`{ children?: React.ReactNode }`，菜单容器（通常放若干 li）。
- `NavActions`：`{ children?: React.ReactNode }`，动作区（右侧）。

## 主题与风格要点

- 使用 `variant={{ role, color }}` 控制语义角色与色调，风格强度会由角色映射（例如 primary → solid，text → text）。
- `glass` 搭配 `shadow` 可塑造通透或实体的视觉风格；导航栏默认 `glass=true` 且 `shadow='sm'`。
- `size` 会影响整体高度/字体大小（同库内其他组件一致）。

## 常见场景示例

- 简洁标题 + 右侧动作：

```tsx
<MyNav title="MyUI" actions={<button className="px-3 py-1 rounded">GitHub</button>} />
```

- 菜单 + 搜索框 + 登录按钮：

```tsx
<MyNav variant={{ role: 'secondary', color: 'green' }}>
  <NavBrand>MyUI</NavBrand>
  <NavContent>
    <NavMenu>
      <li>Docs</li>
      <li>Components</li>
      <li>Themes</li>
    </NavMenu>
    <input className="ml-4 px-2 py-1 rounded" placeholder="搜索…" />
  </NavContent>
  <NavActions>
    <button className="px-3 py-1 rounded">登录</button>
  </NavActions>
</MyNav>
```

## 参考

- 源码：`src/Components/MyUI/MyNav/`（`MyNav.tsx`、`NavBrand.tsx`、`NavContent.tsx`、`NavMenu.tsx`、`NavActions.tsx`）
- 演示用法：`src/Demos/NavBar.tsx`

## 交互（Interaction）

- 默认行为：导航栏默认不启用整体交互（`interactionEnabled` 在 hook 层面默认为 `false`），以避免整个导航条在 hover/active 时产生全局反馈。
- 可控项（Hook 层面）：
  - `interactionEnabled?: boolean` — 若为 `true`，会启用容器交互并使用 `interaction` 策略生成类名。
  - `interaction?: InteractionPolicy | 'none' | 'basic' | 'rich' | 'minimal'` — 可传入预设名称或自定义策略（默认 `'none'`）。
- 实现细节：`useMyNav` 在 `interactionEnabled` 为 `true` 时会调用 `buildHookInteractionClasses`（结合 `INTERACTION_PRESETS`）生成交互类名，并与 `useAnimation` 的类名一同拼接到 `nav` 的 `className` 上。