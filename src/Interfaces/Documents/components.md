# components 模块接口文档

该模块定义了各类组件的通用接口，包括按钮、通用属性、多态能力等，便于实现一致的 Props 结构和类型约束。

## 所有 API 列表

### 1. HtmlButtonType
**文件**：`button.ts`  
**说明**：按钮专有属性，定义 `buttonType`。
```ts
export interface HtmlButtonType {
    buttonType?: 'button' | 'submit' | 'reset'
}
```

### 2. ICompoundComponent<T>
**文件**：`index.ts`（导出声明）  
**说明**：用于描述“复合组件”（带有挂载子组件的组件）的类型形状。
```ts
export interface ICompoundComponent<T> extends React.ForwardRefExoticComponent<T> {
    [key: string]: any;
}
```

## 用法示例
在按钮组件中组合 `HtmlButtonType`；在需要将子组件挂载为静态属性的组件上使用 `ICompoundComponent<T>` 来获得类型约束（如 `MyCard.Header`、`MyCard.Footer` 等）。

---

详见各接口源码与注释。