/**
 * @fileoverview 空值和未定义值管理工具
 * 提供类型安全的默认值合并和空值处理功能
 * 支持深度合并，允许破坏性更新（null 值覆盖）
 * 使用 TypeScript 5+ 特性确保类型安全
 */

/**
 * 检查值是否为 null 或 undefined
 */
export function isNullish(value: unknown): value is null | undefined {
    return value === null || value === undefined;
}

/**
 * 深度合并默认值和覆盖值
 * 支持破坏性更新：如果覆盖值为 null，会覆盖默认值
 * @template T - 目标类型
 * @param defaults - 默认值对象
 * @param overrides - 覆盖值对象，可以为 undefined
 * @returns 合并后的对象
 */
export function mergeDefaults<const T extends Record<string, unknown>>(
    defaults: T,
    overrides: Partial<T> | undefined | null
): T {
    if (isNullish(overrides)) {
        return defaults;
    }

    const result = { ...defaults };

    for (const key in overrides) {
        if (Object.prototype.hasOwnProperty.call(overrides, key)) {
            const overrideValue = overrides[key];
            const defaultValue = defaults[key];

            // 如果覆盖值不是 undefined（包括 null），则使用覆盖值
            if (overrideValue !== undefined) {
                // 如果是对象且默认值也是对象，进行深度合并
                if (
                    typeof overrideValue === 'object' &&
                    overrideValue !== null &&
                    typeof defaultValue === 'object' &&
                    defaultValue !== null &&
                    !Array.isArray(overrideValue) &&
                    !Array.isArray(defaultValue)
                ) {
                    (result as any)[key] = mergeDefaults(
                        defaultValue as Record<string, unknown>,
                        overrideValue as Record<string, unknown>
                    );
                } else {
                    (result as any)[key] = overrideValue;
                }
            }
            // 如果 overrideValue 是 undefined，保持默认值
        }
    }

    return result;
}

/**
 * 为接口提供默认值的类型安全包装器
 * 使用 satisfies 确保类型兼容性
 * @template T - 接口类型
 * @param defaults - 默认值，必须完全匹配接口
 * @param overrides - 覆盖值
 * @returns 完整的接口对象
 */
export function withDefaults<const T extends Record<string, unknown>>(
    defaults: T,
    overrides?: Partial<T> | null
): T {
    return mergeDefaults(defaults, overrides);
}

/**
 * 安全访问嵌套属性，避免 null/undefined 错误
 * @template T - 对象类型
 * @template K - 键类型
 * @param obj - 对象
 * @param path - 属性路径数组
 * @param defaultValue - 默认值
 * @returns 属性值或默认值
 */
export function safeGet<T, K extends keyof T>(
    obj: T | null | undefined,
    key: K
): T[K] | undefined;
export function safeGet<T, K extends keyof T>(
    obj: T | null | undefined,
    key: K,
    defaultValue: T[K]
): T[K];
export function safeGet<T, K extends keyof T>(
    obj: T | null | undefined,
    key: K,
    defaultValue?: T[K]
): T[K] | undefined {
    if (isNullish(obj)) {
        return defaultValue;
    }
    const value = obj[key];
    return value !== undefined ? value : defaultValue;
}

/**
 * 条件应用默认值
 * 如果值是 null 或 undefined，返回默认值，否则返回原值
 * @template T - 值类型
 * @param value - 待检查的值
 * @param defaultValue - 默认值
 * @returns 处理后的值
 */
export function coalesce<T>(value: T | null | undefined, defaultValue: T): T {
    return isNullish(value) ? defaultValue : value;
}

/**
 * 类型谓词：检查对象是否具有必需的属性
 * @template T - 对象类型
 * @param obj - 对象
 * @param requiredKeys - 必需的键
 * @returns 是否有效
 */
export function hasRequiredKeys<T extends Record<string, unknown>>(
    obj: unknown,
    requiredKeys: (keyof T)[]
): obj is T {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    return requiredKeys.every(key => key in obj && !isNullish((obj as any)[key]));
}