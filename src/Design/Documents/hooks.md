# `hooks/` 目录说明

路径：`src/Design/hooks`

目的：
- 存放与设计系统相关的 React（或框架）hook：默认值提供、主题切换、响应式断点工具等。

关键文件：
- `index.ts`：导出所有 hooks
- `defaults.ts`：提供 hook 默认值或 hook-related 的默认配置（例如 useTheme 默认上下文值）

快速定位：
- 想要查看或修改主题提供/消费的实现：查看 `defaults.ts` 与 `index.ts`。
- 想新增一个设计层面的 hook（如 `useResponsive`）：在 `hooks` 中新增文件并在 `index.ts` 导出。

使用示例（伪代码）：

```ts
// useTheme.ts
import { useContext } from 'react';
import { ThemeContext } from './defaults';
export const useTheme = () => useContext(ThemeContext);
```

注意：
- hooks 可能与组件 context 强耦合，调整时需保证 Provider/Consumer 的一致性并更新 types。

## defaultsRegistry.ts

位置：`src/Design/hooks/defaultsRegistry.ts`

概要：
- 提供一个轻量的全局默认值注册/读取器，用于在设计系统中集中管理组件或 hook 的默认配置。
- 该模块以字符串 key 作为命名空间，支持注册、读取、增量设置以及基于已注册默认值构造本地 overrides 的 helper（createUseDefaults）。

导出 API：

- `type DeepPartial<T>`
	- 辅助类型，递归地将对象属性变为可选，供 overrides 使用。

- `registerDefaults<T extends Record<string, any>>(key: string, defaults: T)`
	- 注册某个 key 的默认值。会对传入的默认值做浅拷贝并冻结（Object.freeze），以防止外部可变修改。

- `getDefaults<T extends Record<string, any>>(key: string): Readonly<T>`
	- 返回指定 key 的已注册默认值（只读）。如果未找到，会抛出一个 Error，提醒调用者先注册。

- `setDefaults<T extends Record<string, any>>(key: string, partial: Partial<T>)`
	- 对已存在的默认值做浅合并（existing + partial），并将结果冻结后重新写回 registry。用于在运行时做可控的增量修改。

- `createUseDefaults<T extends Record<string, any>>(key: string)`
	- 返回一个函数：`(overrides?: DeepPartial<T>) => T`。
	- 该函数会从 registry 中读取 base defaults，并将传入的 overrides（浅合并）应用到返回结果上。适合在组件内部接收 props overrides 时构建最终配置值。

示例：

```ts
// 在某个初始化位置注册组件默认值（比如组件库初始化/主题层）
import defaultsRegistry from '../hooks/defaultsRegistry'

defaultsRegistry.registerDefaults('MyButton', {
	size: 'medium',
	variant: 'primary',
	disabled: false,
})

// 在组件内部使用：
const useButtonDefaults = defaultsRegistry.createUseDefaults<'MyButton', {
	size: string
	variant: string
	disabled: boolean
}>('MyButton')

function MyButton(props) {
	// 合并 registry 默认 + props.overrides（props 中的覆盖项）
	const config = useButtonDefaults(props)
	// config 包含 size/variant/disabled 等最终值
}
```

注意与边界情况：

- 不可变性：`registerDefaults` 和 `setDefaults` 会用 `Object.freeze` 冻结浅拷贝结果，防止外部直接修改注册值；但冻结是浅层的，嵌套对象仍可被修改，若需要深冻结，调用方需在注册前自行处理。
- 缺失 key：`getDefaults` 在未注册时会抛出 Error，调用处应保证先注册或在可控位置捕获错误并回退到安全的默认值。
- 覆盖策略：`setDefaults` 是浅合并策略（后者覆盖前者），这对于大多数配置足够，但若需要合并数组或做深合并，需要在外部合并后再次 `setDefaults`。
- 并发/运行时修改：registry 基于内存 Map，适用于单进程运行时；在同一进程内频繁调用 `setDefaults` 会替换冻结对象，消费者（通过 createUseDefaults 获得配置）在下一次调用时会看到最新值，但不会触发 React 的自动更新（仅返回值），因此如需响应式更新，应结合 context/provider 使用。

推荐使用模式：

- 在库初始化或主题层集中 `registerDefaults`。这样可以为整个应用/文档站点统一配置组件默认行为。
- 运行时微调（例如用户设置）可使用 `setDefaults` 做增量覆盖，但建议仅在启动阶段或受控管理点调用，避免在组件渲染路径中频繁变更。
- 组件内部使用 `createUseDefaults(key)` 返回的函数来合并 registry 的 defaults 与组件收到的 overrides（props），以获得一致且可测试的配置合并点。

示例（处理未注册的情况）：

```ts
import defaultsRegistry from '../hooks/defaultsRegistry'

function safeGetDefaults<T>(key: string, fallback: T): Readonly<T> {
	try {
		return defaultsRegistry.getDefaults<T>(key)
	} catch (e) {
		return Object.freeze({ ...(fallback as any) }) as Readonly<T>
	}
}
```

小结：`defaultsRegistry.ts` 提供了一个简单、低依赖、免 Provider 的默认值集中管理器，适合在设计系统中管理可复用组件的默认配置，并通过 `createUseDefaults` 提供一个轻量的合并入口。对于更复杂的响应式需求，建议结合 React Context/Provider 层来一并设计。