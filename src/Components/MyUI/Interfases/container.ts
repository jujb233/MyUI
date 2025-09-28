/** 容器边框能力（容器类组件常用） */
export interface BorderableProps {
    bordered?: boolean;
}

/** 可点击/可悬停能力（容器类组件常用） */
export interface ClickableProps {
    /** 设为 true 时需统一 A11y（role='button'、tabIndex 等） */
    clickable?: boolean;
    /** 是否允许 hover 反馈（默认通常为 true） */
    hoverable?: boolean;
}
