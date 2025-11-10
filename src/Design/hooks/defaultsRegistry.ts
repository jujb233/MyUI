type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

const registry = new Map<string, any>()

export function registerDefaults<T extends Record<string, any>>(key: string, defaults: T) {
    // freeze a shallow copy to avoid external mutation
    registry.set(key, Object.freeze({ ...defaults }) as T)
}

export function getDefaults<T extends Record<string, any>>(key: string): Readonly<T> {
    const v = registry.get(key)
    if (!v) {
        throw new Error(`Defaults for key "${key}" not found in registry.`)
    }
    return v as Readonly<T>
}

export function setDefaults<T extends Record<string, any>>(key: string, partial: Partial<T>) {
    const existing = (registry.get(key) || {}) as T
    const merged = Object.freeze({ ...(existing as any), ...(partial as any) }) as T
    registry.set(key, merged)
}

export function createUseDefaults<T extends Record<string, any>>(key: string) {
    return (overrides?: DeepPartial<T>): T => {
        const base = (registry.get(key) || {}) as T
        return Object.assign({}, base, overrides as Partial<T>) as T
    }
}

export default {
    registerDefaults,
    getDefaults,
    setDefaults,
    createUseDefaults,
}
