import { type ComponentTheme, resolveTheme, THEME_CLASS_PREFIX } from "../../Options"


// 简单的字符串哈希（以保证 class 名称短且可复用）
const hashString = (s: string) => {
    let h = 2166136261 >>> 0
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i)
        h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)
    }
    return (h >>> 0).toString(36)
}

// 管理单个 <style> 标签和已注入的 class 缓存
const STYLE_ID = 'myui-dynamic-themes'
let styleEl: HTMLStyleElement | null = null
const injected = new Map<string, string>() // key: canonical (color|intensity), value: className

function ensureStyleEl() {
    if (typeof document === 'undefined') return null
    if (styleEl) return styleEl
    const existing = document.getElementById(STYLE_ID) as HTMLStyleElement | null
    if (existing) {
        styleEl = existing
        return styleEl
    }
    styleEl = document.createElement('style')
    styleEl.id = STYLE_ID
    document.head.appendChild(styleEl)
    return styleEl
}

function componentThemeToCssVars(theme: ComponentTheme) {
    return Object.entries(theme)
        .map(([k, v]) => `    ${k}: ${v};`)
        .join('\n')
}

/**
 * 为给定色值/强度注入 runtime css 并返回 className
 * colorOrPreset: e.g. '#ff0000' 或 'blue'
 * intensity: 'solid' | 'soft' | 'subtle' | 'text'
 */
export function ensureThemeClass(colorOrPreset: string, intensity: string) {
    const key = `${colorOrPreset}|${intensity}`
    if (injected.has(key)) return injected.get(key) as string

    // 对预设名或十六进制统一走动态注入，确保在 Tailwind 插件未生效时依然可用
    const theme = resolveTheme({ color: colorOrPreset as any, intensity: intensity as any })
    const seed = `${colorOrPreset}:${intensity}:${JSON.stringify(theme)}`
    const h = hashString(seed)
    const cls = `${THEME_CLASS_PREFIX.color}h_${h}`

    const cssVars = componentThemeToCssVars(theme)
    const rule = `.${cls} {\n${cssVars}\n}`

    const el = ensureStyleEl()
    if (el) {
        el.appendChild(document.createTextNode('\n' + rule))

    }

    injected.set(key, cls)
    return cls
}

export default { ensureThemeClass }
