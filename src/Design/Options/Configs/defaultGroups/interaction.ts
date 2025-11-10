import { DEFAULT_INTERACTION_BEHAVIOR, DEFAULT_INTERACTION_EFFECTS } from '../../../Styles/config/interaction'

export const INTERACTION_BEHAVIOR_DEFAULTS = {
    hover: false,
    focus: false,
    active: false,
    transition: false,
    disabled: false,
} as const

export const INTERACTION_CONFIG_DEFAULTS = {
    scale: {},
    opacity: {},
    background: {},
    shadow: {},
} as const

export const INTERACTION_POLICY_DEFAULTS = {
    enabled: true,
    behavior: DEFAULT_INTERACTION_BEHAVIOR,
    effects: DEFAULT_INTERACTION_EFFECTS,
    classes: {},
} as const
