// src/styles/config/interaction.ts

export const DEFAULT_INTERACTION_BEHAVIOR = {
    hover: true,
    focus: true,
    active: true,
    disabled: true,
    transition: true,
};

export const DEFAULT_INTERACTION_EFFECTS = {
    scale: {
        hover: 1.05,
        active: 0.95,
        disabled: 1,
    },
    opacity: {
        hover: 1,
        active: 0.8,
        disabled: 0.5,
    },
};

export const INTERACTION_PRESETS = {
    gentle: {
        effects: {
            scale: { hover: 1.02, active: 0.98 },
            opacity: { hover: 0.9, active: 0.7 },
        },
    },
    none: {
        enabled: false,
    },
};
