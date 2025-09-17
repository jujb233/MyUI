# MyUI 发布指南

这个文档描述了如何将 MyUI 组件库发布到 npm 和 GitHub。

## 发布到 npm

### 1. 确保你已经登录 npm
```bash
npm login
```

### 2. 检查包名是否可用
```bash
npm view @jujb233/myui
```

### 2.1. 生成类型声明文件（TypeScript 类型）
确保 `tsconfig.json` 包含如下配置：
```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationDir": "./dist/types",
    "emitDeclarationOnly": false,
    // ...其他配置
  }
}
```
构建后会在 `dist/types` 目录下生成 `.d.ts` 文件。

在 `package.json` 中添加：
```json
{
  "types": "dist/types/index.d.ts"
}
```
这样用户在项目中引用你的包时会自动获得类型提示。

### 3. 构建项目
```bash
npm run build
```

### 4. 发布到 npm
```bash
npm publish --access public
```

## 发布到 GitHub

### 1. 初始化 Git 仓库
```bash
git init
git add .
git commit -m "feat: initial release of MyUI component library"
```

### 2. 创建 GitHub 仓库
1. 访问 GitHub.com
2. 创建新仓库 "MyUI"
3. 不要初始化 README、.gitignore 或 LICENSE (我们已经有了)

### 3. 连接本地仓库到 GitHub
```bash
git remote add origin https://github.com/jujb233/MyUI.git
git branch -M main
git push -u origin main
```

### 4. 创建发布标签
```bash
git tag v0.19.0-1
git push origin v0.19.0-1
```

## 版本管理

使用语义化版本控制 (SemVer):
- `1.0.0.0.pre0` - 主版本
- `0.0.1.0.pre0` - 次版本 (适配的react版本)
- `0.0.0.1.pre0` - 修订版本 (错误修复)
- `0.0.0.0.pre1` - 预览版本 (补丁修复)
- `0.0.1.0.pre0` - 封装的组件个数

### 更新版本
```bash
# 修订版本
npm version patch

# 次版本  
npm version minor

# 主版本
npm version major
```

## 持续开发

### 添加新组件
1. 在 `src/Components/MyUI/` 中创建新组件
2. 在 `src/index.ts` 中导出新组件
3. 更新 README.md 文档
4. 运行测试和构建
5. 更新版本号并发布

### 示例：添加新组件
```tsx
// src/Components/MyUI/MyInput.tsx
export type MyInputProps = {
  // 组件属性定义
}

function MyInput(props: MyInputProps) {
  // 组件实现
}

export default MyInput
```

```ts
// src/index.ts
export { default as MyInput } from './Components/MyUI/MyInput'
export type { MyInputProps } from './Components/MyUI/MyInput'
```
