# `configs/` 目录说明

路径：`src/Design/configs`

目的：
- 存放配置生成逻辑与共享配置，比如 `classes.ts` 负责定义或生成组件的 class 名称映射或工具函数。

关键文件：
- `classes.ts`：通常包含一组 className 生成规则或 class 组合器，用于组件层的 class 计算。
- `index.ts`：导出所有配置工具，供 Design 的入口文件与组件使用。

快速定位与常见修改点：
- 想调整组件 class 前缀或命名规则：修改 `classes.ts`。
- 想新增一个全局样式工具（例如 `cx`/`clsx` 包装函数）：在 `configs` 下添加文件并在 `index.ts` 导出。

示例：`classes.ts` 常见内容（伪代码）

```ts
export const buttonClasses = (variant: string, size: string) => {
  return `myui-btn myui-btn--${variant} myui-btn--${size}`;
};
```

注意：修改 `classes.ts` 会影响所有依赖该配置的组件，提交前请在组件 storybook 或本地 dev 环境中回归测试。