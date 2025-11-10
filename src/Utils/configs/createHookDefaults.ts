// 通用的 defaults 工厂，放在 Utils 层以减少 Options <-> Utils 的循环依赖。
// 该文件不应直接依赖 Options 模块（例如 POSITION_DEFAULTS），由调用方决定是否注入位置默认值。
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

function shallowMerge<T extends Record<string, any>>(base: T, overrides?: Partial<T>): T {
    return Object.assign({}, base, overrides) as T
}

export function createHookDefaults<T extends Record<string, any>>(base: T) {
    const frozenBase = Object.freeze({ ...base }) as T
    return (overrides?: DeepPartial<T>): T => {
        const merged = shallowMerge(frozenBase, overrides as Partial<T>)
        return merged
    }
}

export default createHookDefaults
