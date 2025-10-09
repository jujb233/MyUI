import { GLASS_SHADOWS, SHADOWS, type ShadowName } from './styleConstants'

export type ElevationKind = 'button' | 'card' | 'panel'

interface ElevationParams {
    glass?: boolean
    shadow?: ShadowName
    kind?: ElevationKind
}

/**
 * 精细化投影解析：针对不同组件类型/玻璃态做差异。
 */
export function resolveElevation({ glass, shadow = 'md', kind = 'button' }: ElevationParams) {
    if (glass) {
        switch (kind) {
            case 'card':
                return GLASS_SHADOWS.lg ?? GLASS_SHADOWS.md
            case 'panel':
                return GLASS_SHADOWS.md
            case 'button':
            default:
                return GLASS_SHADOWS.md
        }
    }
    return SHADOWS[shadow]
}
