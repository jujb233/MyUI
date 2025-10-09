/**
 * 将数字限制在 min 和 max 之间
 * @param n 要限制的数字
 * @param min 最小值，默认为 0
 * @param max 最大值，默认为 255
 * @returns 限制后的数字
 */
const clamp = (n: number, min = 0, max = 255) => Math.min(max, Math.max(min, n))

/**
 * 检查字符串是否为有效的十六进制颜色
 * @param v 要检查的字符串
 * @returns 如果是有效的十六进制颜色则返回 true，否则返回 false
 */
export const isHexColor = (v: string): boolean => /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(v)

/**
 * 将十六进制颜色字符串转换为 RGB 对象
 * @param hex 十六进制颜色字符串 (例如, "#RRGGBB" 或 "#RGB")
 * @returns 包含 r, g, b 值的对象
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    let h = hex.replace('#', '')
    if (h.length === 3) {
        h = h.split('').map(c => c + c).join('')
    }
    const num = parseInt(h, 16)
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 }
}

/**
 * 将 RGB 颜色值转换为十六进制颜色字符串
 * @param r 红色分量 (0-255)
 * @param g 绿色分量 (0-255)
 * @param b 蓝色分量 (0-255)
 * @returns 十六进制颜色字符串
 */
export const rgbToHex = (r: number, g: number, b: number): string => {
    const toHex = (n: number) => clamp(Math.round(n)).toString(16).padStart(2, '0')
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * 按给定数量调整十六进制颜色的亮度
 * @param hex 十六进制颜色字符串
 * @param amount 调整量 (-100 到 100)。正值使颜色变亮，负值使颜色变暗。
 * @returns 调整后的十六进制颜色字符串
 */
export const adjustColorBrightness = (hex: string, amount: number): string => {
    const { r, g, b } = hexToRgb(hex)
    const k = amount / 100
    const mix = (c: number) => (k >= 0 ? c + (255 - c) * k : c * (1 + k))
    return rgbToHex(mix(r), mix(g), mix(b))
}

/**
 * 为十六进制颜色添加 alpha 通道
 * @param hex 十六进制颜色字符串
 * @param a alpha 值 (0-1)
 * @returns "rgba(r, g, b, a)" 格式的颜色字符串
 */
export const alphaFromHex = (hex: string, a: number): string => {
    const { r, g, b } = hexToRgb(hex)
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

/**
 * 根据背景十六进制颜色确定应使用浅色还是深色文本
 * 使用 YIQ 公式
 * @param hex 背景的十六进制颜色字符串
 * @returns 适合的文本颜色 ('#1f2937' 表示深色, '#ffffff' 表示浅色)
 */
export const yiqTextColor = (hex: string): string => {
    const { r, g, b } = hexToRgb(hex)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 150 ? '#1f2937' : '#ffffff'
}
