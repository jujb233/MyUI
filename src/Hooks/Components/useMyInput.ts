import type { JSX } from "solid-js"
import { createUseMyInputDefaults, SLOTS_STYLE } from "@/Design"
import type { ComponentHookResult } from "@/Interfaces"

export type UseMyInputProps = {
    className?: string
    disabled?: boolean
    hover?: boolean
    // allow overrides for class fragments
    classRootBase?: string
    classRootTransition?: string
    classRootFocus?: string
    classRootHover?: string
    // inner input class
    inputInnerClass?: string
    // other common hook props
    inputType?: string
    variant?: string
    size?: string
}

export function useMyInput(_props: UseMyInputProps): ComponentHookResult {
    // merge passed props into defaults from Options/configs via factory
    const merged = createUseMyInputDefaults(_props as any) as any
    const { disabled, hover } = merged

    // build final class by composing configured fragments; keep order stable
    const fragments: string[] = []
    const classRootBase = merged.classRootBase
    const classRootTransition = merged.classRootTransition
    const classRootFocus = merged.classRootFocus
    const classRootHover = merged.classRootHover

    if (classRootBase) fragments.push(classRootBase)
    if (classRootTransition) fragments.push(classRootTransition)
    if (classRootFocus) fragments.push(classRootFocus)

    // hover/disabled may influence additional classes; prefer configured hover if present
    if (hover !== false && !disabled) {
        if (classRootHover) fragments.push(classRootHover)
        else fragments.push('hover:shadow-sm')
    }
    if (disabled) {
        fragments.push('opacity-60 pointer-events-none')
    }

    const rootClass = fragments.join(' ')

    const slots = {
        icon: SLOTS_STYLE.inputIcon || SLOTS_STYLE.buttonIcon,
        options: SLOTS_STYLE.inputOptions || SLOTS_STYLE.buttonOptions,
    }

    const result: ComponentHookResult = { rootClass, slots, extras: { inputInnerClass: merged.inputInnerClass } }
    return result
}

export default useMyInput
