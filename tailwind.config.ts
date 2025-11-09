import type { Config } from 'tailwindcss'
import { baseColors, spacing, fontSizes, fontWeights, borderRadius, shadows, glassShadows } from './src/Styles/config/base';

/**
 * @description MyUI 的 Tailwind CSS 核心配置
 * 该文件将基础设计系统变量转换为 Tailwind 能理解的格式。
 */
const tailwindConfig = {
  theme: {
    extend: {
      spacing: { ...spacing },
      fontSize: { ...fontSizes },
      fontWeight: { ...fontWeights },
      borderRadius: { ...borderRadius },
      boxShadow: { ...shadows },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        'fade': 'fade-in 0.3s ease-out',
      },
    },
  },
  plugins: [
    // 用于 MyUI 主题颜色类和玻璃效果的实用工具
    function ({ addUtilities }: any) {
      const colorUtilities: Record<string, any> = {};
      for (const [name, val] of Object.entries(baseColors)) {
        if (typeof val === 'object' && val && 'from' in val && 'to' in val) {
          colorUtilities[`.myui-color-${name}`] = {
            '--from': (val as any).from,
            '--to': (val as any).to,
          };
        }
      }
      const glassUtilities = {
        '.myui-glass-md': { boxShadow: glassShadows.md },
        '.myui-glass-lg': { boxShadow: glassShadows.lg },
      } as const;
      addUtilities({ ...colorUtilities, ...glassUtilities });
    },
  ],
};


// 导出 MyUI 的核心配置，作为预设
export const myuiPreset = {
  ...tailwindConfig,
} satisfies Omit<Config, 'content'>

// 默认导出，用于项目自身的开发和构建
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // 确保组件源文件被扫描
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [myuiPreset],
} satisfies Config


