import type { IntensityName, VariantRole } from '@/Interfaces'

export const Intensity = ['solid', 'soft', 'subtle', 'text', 'link'] as const

const VARIANT_ROLE_STYLES: Record<VariantRole, IntensityName> = {
    primary: 'solid',
    secondary: 'soft',
    success: 'solid',
    warning: 'solid',
    danger: 'solid',
    text: 'text',
    link: 'link',
}

export const roles: { VARIANT_ROLE_STYLES: Record<VariantRole, IntensityName> } = {
    VARIANT_ROLE_STYLES,
}