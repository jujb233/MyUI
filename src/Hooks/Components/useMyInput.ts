import type { JSX } from "solid-js"
import { createUseMyInputDefaults, SLOTS_STYLE } from "@/Design"
import type { ComponentHookResult, SizeName } from "@/Interfaces"

export type UseMyInputProps = {
    class?: string
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
    size?: SizeName
}

export function useMyInput(_props: UseMyInputProps): ComponentHookResult {
    // merge passed props into defaults from Options/configs via factory
    const merged = createUseMyInputDefaults(_props as any) as any
    const { disabled, hover, fillByDefault } = merged

    // build final class by composing configured fragments; keep order stable
    const fragments: string[] = []
    // Decide whether the component should fill width by default or be content-sized.
    // Mirror useMyCard behavior: if `fillByDefault` is true, use `flex` (fill); otherwise `inline-flex` (shrink-to-fit).
    const useFill = fillByDefault ?? false
    const displayClass = useFill ? 'flex' : 'inline-flex'
    // keep display class at the start so it's predictable in the composed class string
    fragments.push(displayClass)
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

    // 统一校验 size（Input 只支持 size，暂不支持 xLength/yLength）
    try {
        if (merged.size && typeof merged.size !== 'string') {
            console.warn(`[MYUI] Input: size 类型错误，应为字符串 SizeName`)
        }
    } catch (e) {
        console.warn(`[MYUI] Input: 尺寸参数错误`, e)
    }
    const result: ComponentHookResult = { rootClass, slots, extras: { inputInnerClass: merged.inputInnerClass } }
    return result
}

export default useMyInput
