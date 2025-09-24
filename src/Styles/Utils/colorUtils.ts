/**
 * 颜色处理工具函数
 */

const clamp = (n: number, min = 0, max = 255) => Math.min(max, Math.max(min, n));

export const isHexColor = (v: string): boolean => /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(v);

export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    let h = hex.replace('#', '');
    if (h.length === 3) {
        h = h.split('').map(c => c + c).join('');
    }
    const num = parseInt(h, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
};

export const rgbToHex = (r: number, g: number, b: number): string => {
    const toHex = (n: number) => clamp(Math.round(n)).toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

export const adjustHex = (hex: string, amount: number): string => {
    const { r, g, b } = hexToRgb(hex);
    const k = amount / 100;
    const mix = (c: number) => (k >= 0 ? c + (255 - c) * k : c * (1 + k));
    return rgbToHex(mix(r), mix(g), mix(b));
};

export const alphaFromHex = (hex: string, a: number): string => {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export const yiqTextColor = (hex: string): string => {
    const { r, g, b } = hexToRgb(hex);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 150 ? '#1f2937' : '#ffffff';
};
