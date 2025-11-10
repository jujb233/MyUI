const STYLE_TAG_ID = 'myui-global-styles'
let stylesSource: (() => string) | undefined
let injected = false

export const setMyUIStyles = (getter: () => string) => {
    stylesSource = getter
    injected = false
}

export const ensureMyUIStyles = (stylesOverride?: string) => {
    if (typeof document === 'undefined') return
    const existing = document.getElementById(STYLE_TAG_ID)
    if (existing && injected) return

    const css = typeof stylesOverride === 'string' ? stylesOverride : stylesSource?.()
    if (!css) return

    if (existing) {
        existing.textContent = css
        injected = true
        return
    }

    const style = document.createElement('style')
    style.id = STYLE_TAG_ID
    style.textContent = css
    document.head.appendChild(style)
    injected = true
}
