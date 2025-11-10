# Design 文档索引

此文档集合与 `src/Design` 目录结构一一对应。目标是让开发者能够通过文档迅速定位需要修改或参考的配置文件、主题、Token、样式与交互逻辑。

文档布局（与文件夹保持一致）：

- `README.md`：顶级概览与快速索引（本文件）
- `index.md`：`src/Design/index.ts` 承载的导出、入口说明
- `animations.md`：`animations/` 目录说明与常见配置点
- `configs.md`：`configs/` 目录说明（classes 等）
- `defaults.md`：`defaults/` 目录说明（默认主题、分组等）
- `hooks.md`：`hooks/` 目录说明（默认钩子、如何扩展）
- `interaction.md`：`interaction/` 目录说明（交互 API）
- `Styles.md`：`Styles/` 目录说明（根样式、myui 变体）
- `themes.md`：`themes/` 目录说明（角色、主题导出）
- `tokens.md`：`tokens/` 目录说明（基础 token）

快速索引（按常见需求）：

- 想要修改全局 CSS 变量或原子 token：查看 `tokens/index.ts` 和 `tokens/base.ts`。
- 想要调整主题角色（roles）或主题集合：查看 `themes/roles.ts` 与 `themes/index.ts`。
- 想要修改默认样式或主题默认值：查看 `defaults/themeDefaults.ts` / `defaults/defaultGroups.ts`。
- 想要查看样式变体或 CSS 文件：查看 `Styles/myui/variants.css` 与 `Styles/index.ts`。
- 想要修改组件级 class 生成规则：查看 `configs/classes.ts`。
- 想要添加或修改动画：查看 `animations/index.ts` 及其导出的动画集合。

使用建议：

1. 先从本 `README.md` 的“快速索引”定位模块。
2. 打开对应的子文档（例如 `themes.md`），里面会列出关键文件路径、导出的符号、修改示例和常见场景。
3. 修改后可运行项目构建或本地 dev 来验证样式/主题是否生效：`npm run dev` / `npm run build`。

下面的子页面按目录排序，详见同目录下的 `.md` 文件。
