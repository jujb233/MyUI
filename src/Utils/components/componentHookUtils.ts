import type { ComponentHookResult } from "../../Interfaces";

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
