# 贡献指南

感谢您对 MyUI 项目的兴趣！我们欢迎所有形式的贡献，无论是报告问题、提交代码还是改进文档。以下是参与贡献的简单步骤：

## 1. Fork 仓库

点击 GitHub 上的 "Fork" 按钮，将本仓库复制到您的 GitHub 账户中。

## 2. 克隆仓库

使用以下命令将 Fork 的仓库克隆到本地：

```bash
git clone https://github.com/您的用户名/MyUI.git
cd MyUI
```

## 3. 创建分支

为您的更改创建一个新的分支：

```bash
git checkout -b feature/您的功能名称
```

## 4. 安装依赖

运行以下命令安装项目依赖：

```bash
npm install
```

## 5. 开发与测试

- 在 `src/` 目录下进行开发。
- 使用以下命令启动开发服务器：

```bash
npm run dev
```

- 确保运行以下命令进行构建和类型检查：

```bash
npm run build
npm run build:types
```

## 6. 提交更改

提交您的更改：

```bash
git add .
git commit -m "描述您的更改"
```

## 7. 推送分支

将分支推送到您的 GitHub 仓库：

```bash
git push origin feature/您的功能名称
```

## 8. 创建 Pull Request

在 GitHub 上打开您的 Fork 仓库，点击 "New Pull Request"，选择将更改合并到主仓库的 `main` 分支。

## 注意事项

- 请确保代码风格与项目保持一致。
- 提交前请运行所有测试并确保通过。
- 如果是修复 Bug，请在 Pull Request 中描述问题和解决方法。

感谢您的贡献！