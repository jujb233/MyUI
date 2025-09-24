import { adjustHex, alphaFromHex, yiqTextColor } from "../Utils/colorUtils";

/**
 * 定义主题对象的结构
 */
export interface ComponentTheme {
    // 背景色 (可以是渐变)
    '--bg': string;
    // 悬停时的背景色
    '--bg-hover': string;
    // 主文本颜色
    '--text': string;
    // 边框颜色
    '--border': string;
    // 焦点环颜色
    '--focus-ring': string;

    // 玻璃态背景
    '--glass-bg': string;
    // 玻璃态悬停背景
    '--glass-bg-hover': string;
    // 玻璃态边框
    '--glass-border': string;
}

const gradient = (from: string, to: string) => `linear-gradient(135deg, ${from} 0%, ${to} 100%)`;

/**
 * 从一对颜色构建组件主题
 * @param from - 渐变起始色
 * @param to - 渐变结束色
 * @param text - （可选）文本颜色，不提供则自动计算
 * @returns ComponentTheme 对象
 */
export const buildTheme = (from: string, to: string, text?: string): ComponentTheme => {
    const hoverFrom = adjustHex(from, -12);
    const hoverTo = adjustHex(to, -12);
    const textColor = text ?? yiqTextColor(to);

    return {
        '--bg': gradient(from, to),
        '--bg-hover': gradient(hoverFrom, hoverTo),
        '--text': textColor,
        '--border': 'transparent',
        '--focus-ring': alphaFromHex(to, 0.5),

        '--glass-bg': gradient(alphaFromHex(from, 0.15), alphaFromHex(to, 0.15)),
        '--glass-bg-hover': gradient(alphaFromHex(from, 0.25), alphaFromHex(to, 0.25)),
        '--glass-border': alphaFromHex(from, 0.2),
    };
};

/**
 * 为卡片构建一个特殊的主题，具有更柔和的背景和边框
 */
export const buildCardTheme = (from: string, to: string, text?: string): ComponentTheme => {
    const base = buildTheme(from, to, text);
    return {
        ...base,
        '--bg': gradient(adjustHex(from, 80), adjustHex(to, 90)), // 更浅的背景
        '--bg-hover': gradient(adjustHex(from, 75), adjustHex(to, 85)),
        '--border': alphaFromHex(from, 0.3),
    };
};
