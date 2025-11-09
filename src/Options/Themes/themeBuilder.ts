// 直接引用具体实现，避免通过 Utils 聚合引入循环依赖与路径解析问题
import { adjustColorBrightness, alphaFromHex, yiqTextColor } from "../../Utils/styles"

/**
 * 定义主题对象的结构
 */
export interface ComponentTheme {
    // 背景色 (可以是渐变)
    '--bg': string
    // 悬停时的背景色
    '--bg-hover': string
    // 主文本颜色
    '--text': string
    // 边框颜色
    '--border': string
    // 焦点环颜色
    '--focus-ring': string

    // 玻璃态背景
    '--glass-bg': string
    // 玻璃态悬停背景
    '--glass-bg-hover': string
    // 玻璃态边框
    '--glass-border': string
}

const gradient = (from: string, to: string) => `linear-gradient(135deg, ${from} 0%, ${to} 100%)`

export type IntensityVariant = 'solid' | 'soft' | 'subtle' | 'text'

/**
 * 从一对颜色构建组件主题
 * @param from - 渐变起始色
 * @param to - 渐变结束色
 * @param text - （可选）文本颜色，不提供则自动计算
 * @returns ComponentTheme 对象
 */
export const buildTheme = (from: string, to: string, text?: string): ComponentTheme => {
    const hoverFrom = adjustColorBrightness(from, -12)
    const hoverTo = adjustColorBrightness(to, -12)
    const textColor = text ?? yiqTextColor(to)

    return {
        '--bg': gradient(from, to),
        '--bg-hover': gradient(hoverFrom, hoverTo),
        '--text': textColor,
        '--border': 'transparent',
        '--focus-ring': alphaFromHex(to, 0.5),

        '--glass-bg': gradient(alphaFromHex(from, 0.15), alphaFromHex(to, 0.15)),
        '--glass-bg-hover': gradient(alphaFromHex(from, 0.25), alphaFromHex(to, 0.25)),
        '--glass-border': alphaFromHex(from, 0.2),
    }
}

/**
 * 基于“强度变体”从基色构建主题。
 * 变体=强度，颜色=色调。
 */
export const buildThemeByIntensity = (
    from: string,
    to: string,
    variant: IntensityVariant
): ComponentTheme => {
    const make = (bg: { from: string; to: string }, cfg: { text?: string; border?: string; focusA?: number; glassA?: { base: number; hover: number; border: number } }): ComponentTheme => {
        const textColor = cfg.text ?? yiqTextColor(bg.to)
        const focusRing = alphaFromHex(to, cfg.focusA ?? 0.5)

        const base: ComponentTheme = {
            '--bg': gradient(bg.from, bg.to),
            '--bg-hover': gradient(adjustColorBrightness(bg.from, -6), adjustColorBrightness(bg.to, -6)),
            '--text': textColor,
            '--border': cfg.border ?? 'transparent',
            '--focus-ring': focusRing,
            '--glass-bg': gradient(alphaFromHex(from, cfg.glassA?.base ?? 0.15), alphaFromHex(to, cfg.glassA?.base ?? 0.15)),
            '--glass-bg-hover': gradient(alphaFromHex(from, cfg.glassA?.hover ?? 0.25), alphaFromHex(to, cfg.glassA?.hover ?? 0.25)),
            '--glass-border': alphaFromHex(from, cfg.glassA?.border ?? 0.2),
        }

        return base
    }

    switch (variant) {
        case 'solid':
            return make({ from, to }, { focusA: 0.5, glassA: { base: 0.15, hover: 0.25, border: 0.2 } })
        case 'soft':
            return make(
                { from: alphaFromHex(from, 0.2), to: alphaFromHex(to, 0.2) },
                {
                    text: to, // 采用基色作为文本色，营造中等对比
                    border: alphaFromHex(from, 0.3),
                    focusA: 0.35,
                    glassA: { base: 0.12, hover: 0.18, border: 0.18 },
                }
            )
        case 'subtle':
            return make(
                { from: alphaFromHex(from, 0.08), to: alphaFromHex(to, 0.08) },
                {
                    text: '#1f2937', // 低对比背景，采用中性深文本
                    border: alphaFromHex(from, 0.22),
                    focusA: 0.25,
                    glassA: { base: 0.08, hover: 0.12, border: 0.12 },
                }
            )
        case 'text':
            return {
                '--bg': 'transparent',
                '--bg-hover': alphaFromHex(to, 0.06), // 轻微悬停反馈
                '--text': to,
                '--border': 'transparent',
                '--focus-ring': alphaFromHex(to, 0.4),
                '--glass-bg': 'transparent',
                '--glass-bg-hover': alphaFromHex(to, 0.06),
                '--glass-border': 'transparent',
            }
        default:
            return make({ from, to }, { focusA: 0.5, glassA: { base: 0.15, hover: 0.25, border: 0.2 } })
    }
}
