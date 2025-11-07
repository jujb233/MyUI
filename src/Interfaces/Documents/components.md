# components 模块接口文档

该模块定义了各类组件的通用接口，包括按钮、通用属性、多态功能等，便于实现一致的 Props 结构和类型约束。

## 所有 API 列表

### 1. HtmlButtonType
**文件**：`button.ts`  
**说明**：按钮专有属性，定义 `buttonType`。
```ts
export interface HtmlButtonType {
    buttonType?: 'button' | 'submit' | 'reset'
}
```

---

详见各接口源码与注解。