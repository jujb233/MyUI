import type { JSX } from "solid-js";

/**
 * 通用组件 Hook 返回值。
 *
 * 使用范型 Extras 以获得更严格的附加数据类型约束；不指定则为空对象。
 * 约定：
 * - rootClass/rootStyle 对应组件最外层元素。
 * - slots/slotStyles 用于命名槽位的 class 与 style；slotStyles 中的 style 优先级高于外部继承。
 * - extras 用于存放与渲染无直接关系但对消费层有帮助的计算状态、配置等。
 */
export interface ComponentHookResult<Extras extends Record<string, any> = {}> {
    /** 根元素的类名 */
    rootClass?: string;
    /** 根元素的内联样式 */
    rootStyle?: JSX.CSSProperties;
    /** 槽位类名映射 */
    slots?: Record<string, string>;
    /** 槽位内联样式映射 */
    slotStyles?: Record<string, JSX.CSSProperties>;
    /** 附加的计算结果或状态（结构化，可选） */
    extras?: Extras;
}

/** 工具函数：安全获取槽位 class */
export function getSlotClass(result: ComponentHookResult<any>, slotName: string): string | undefined {
    return result.slots?.[slotName];
}

/** 工具函数：合并额外 extras（保持不可变） */
export function withExtras<Extras extends Record<string, any>, Added extends Record<string, any>>(result: ComponentHookResult<Extras>, added: Added): ComponentHookResult<Extras & Added> {
    return {
        ...result,
        extras: { ...(result.extras || {}), ...added },
    } as ComponentHookResult<Extras & Added>;
}