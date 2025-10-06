/** @type {import('tailwindcss').Config} */
export const content = [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
];
export const safelist = [
    // transition + duration
    'transition-all', 'duration-200', 'ease-in-out', 'transition-transform',
    // focus ring
    'focus:outline-none', 'focus-visible:ring-2', 'focus-visible:ring-offset-2', 'focus-visible:ring-opacity-50',
    // disabled cursor
    'disabled:cursor-not-allowed',
    // common scale/opacity patterns (arbitrary values)
    'hover:scale-[1.02]', 'hover:scale-[1.05]', 'active:scale-[0.95]', 'active:scale-95',
    'disabled:scale-[1]', 'disabled:scale-[1.00]',
    'hover:opacity-[0.9]', 'active:opacity-[0.8]', 'disabled:opacity-[0.6]',
];
export const theme = {
    extend: {},
};
export const plugins = [];
