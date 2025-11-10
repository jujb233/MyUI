// 集中定义所有组件的静态槽位/结构类，统一出口 SLOTS_STYLE
// 组件内部仅引用此对象，避免多处重复维护。

export const SLOTS_STYLE = {
    // 结构/层次类
    container: "flex",
    content: "", // CardContent 不填满父容器，Nav/Panel 由各自内容组件决定是否填满
    header: "flex items-center", // 统一 header 行基础结构
    footer: "mt-auto", // footer 基础定位
    actions: "flex gap-2 mt-4", // 操作按钮集合
    tagsContainer: "flex flex-wrap gap-2 mb-3", // 标签集合容器
    tag: "px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full", // 单个标签

    // 文本/语义类
    title: "font-bold text-[var(--text)]", // 标题基础样式
    textMuted: "text-[var(--text)]/85", // 次级正文

    // 导航/品牌相关
    brand: "flex-shrink-0", // 品牌标识位置
    menu: "flex items-center space-x-4", // 导航菜单容器
    navActions: "ml-auto flex items-center", // 导航右侧操作集合

    // 插槽辅助
    buttonIcon: "mr-2 flex items-center",
    buttonContent: "flex-1 truncate",
    buttonOptions: "ml-2 flex items-center",

    // Input 相关槽位
    inputRoot: "relative flex items-center gap-2",
    inputIcon: "mr-2 flex items-center",
    inputOptions: "ml-2 flex items-center",
    // Panel 与 Card 可以共享 header/footer 前缀，若需要再组合 sizeConfig 信息
    panelHeaderExtra: "mb-4", // Panel 额外 header 间距
    panelFooter: "mt-4", // Panel footer 间距
    cardFooterBase: "card-footer mt-auto", // Card 的 footer 基础类
    cardHeaderBase: "card-header", // Card 的 header 基础类（与通用 header 拼接）
    navRootSizePrefix: "my-nav-", // Nav root 尺寸前缀

    // 图片样式
    image: {
        top: "object-cover w-full h-48",
        left: "object-cover w-32 h-full",
        right: "object-cover w-32 h-full",
        background: "object-cover absolute inset-0 h-full w-full opacity-10",
        center: "object-cover absolute inset-0 h-full w-full opacity-10",
        bottom: "object-cover w-full h-48", // 添加缺失的 bottom 样式
    },
} as const
