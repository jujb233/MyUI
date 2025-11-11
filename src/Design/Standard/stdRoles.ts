import type { IntensityName, VariantRole } from '@/Interfaces'

export const Intensity = ['solid', 'soft', 'subtle', 'text', 'link'] as const
export const Role = ['primary' , 'secondary' , 'success' , 'warning' , 'danger' , 'text' , 'link'] as const

export const RolesIntensityMap: Record<VariantRole, IntensityName> = {
    primary: 'solid',
    secondary: 'soft',
    success: 'solid',
    warning: 'solid',
    danger: 'solid',
    text: 'text',
    link: 'link',
} as const