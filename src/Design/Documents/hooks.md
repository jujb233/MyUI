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