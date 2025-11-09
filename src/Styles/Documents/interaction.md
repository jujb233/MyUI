# interaction.ts（交互相关）

位置：`src/Styles/config/interaction.ts`

说明

- 该文件包含与 UI 交互相关的默认类、常量或工具。项目中部分交互逻辑在 `src/Options/Interactions/interaction.ts` 层进行封装并导出供上层使用。

主要用途

- 提供一些基础交互样式或常量，方便在构建交互类名时复用（例如 hover/active 的默认比例、transition 类等）。

如何配合 Options 层使用

- `src/Options/Interactions/interaction.ts` 中的 `buildInteractionClasses` 使用了类似的默认值来返回一串 Tailwind 类名。若你需要修改交互的默认数值（例如 hover 缩放比例），可以在 `interaction.ts` 或 Options 层统一调整。

示例（来自 Options 层的使用方式）

```ts
import { buildInteractionClasses } from '../../Options/Interactions/interaction'

const cls = buildInteractionClasses({ hover: true, active: false })
// -> 'transition-transform hover:scale-[1.02] disabled:hover:scale-100 disabled:active:scale-100'
```
