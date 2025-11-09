/**
 * Web Components 注册入口。
 * 使用 solid-element 将现有 Solid 组件包装为自定义元素，尽量保持原有 Props API。
 *
 * 约定：
 * - 标签命名为 `${prefix}-button` / `${prefix}-card` / `${prefix}-nav` / `${prefix}-panel`。默认 prefix = 'myui'。
 * - 属性与原组件的同名 props（kebab-case -> camelCase 自动转换由 solid-element 处理）。
 * - 事件：原组件 onClick 等仍可通过 addEventListener('click', ...) 监听。
 * - children 直接作为插槽文本/HTML 注入。
 *
 * 若需要自定义前缀，可调用 `registerMyUIWebComponents('x')` 生成 <x-button> 等标签。
 */
import { customElement } from 'solid-element'
import { MyButton } from './Components/MyButton'
import { MyCard } from './Components/MyCard'
import { MyNav } from './Components/MyNav'
import { MyPanel } from './Components/MyPanel'
import type { IMyButtonProps } from './Components/MyButton'
import type { IMyCardProps } from './Components/MyCard'
import type { IMyNavProps } from './Components/MyNav'
import type { IMyPanelProps } from './Components/MyPanel'

// 将可选的复杂对象属性（如 options、animation 等）从字符串自动解析 JSON（如果是字符串且看起来像 JSON）。
function maybeParse<T>(v: any): T | any {
    if (typeof v === 'string') {
        const s = v.trim()
        if ((s.startsWith('{') && s.endsWith('}')) || (s.startsWith('[') && s.endsWith(']'))) {
            try { return JSON.parse(s) } catch { return v }
        }
    }
    return v
}

function normalizeProps<P extends Record<string, any>>(raw: P): P {
    const out: Record<string, any> = {}
    for (const k of Object.keys(raw)) {
        out[k] = maybeParse(raw[k])
    }
    return out as P
}

export const registerMyUIWebComponents = (prefix = 'myui') => {
    const defs: string[] = []

    // 按需定义，若已存在则跳过避免重复注册报错。
    const defineOnce = (name: string, factory: () => void) => {
        if (!customElements.get(name)) {
            factory()
            defs.push(name)
        }
    }

    defineOnce(`${prefix}-button`, () => {
        // 默认属性对象可以留空，保持 API 开放性
        customElement<IMyButtonProps>(`${prefix}-button`, {}, (props) => {
            const p = normalizeProps(props) as IMyButtonProps
            return <MyButton {...p}>{p.children}</MyButton>
        })
    })

    defineOnce(`${prefix}-card`, () => {
        customElement<IMyCardProps>(`${prefix}-card`, {}, (props) => {
            const p = normalizeProps(props) as IMyCardProps
            return <MyCard {...p}>{p.children}</MyCard>
        })
    })

    defineOnce(`${prefix}-nav`, () => {
        customElement<IMyNavProps>(`${prefix}-nav`, {}, (props) => {
            const p = normalizeProps(props) as IMyNavProps
            return <MyNav {...p}>{p.children}</MyNav>
        })
    })

    defineOnce(`${prefix}-panel`, () => {
        customElement<IMyPanelProps>(`${prefix}-panel`, {}, (props) => {
            const p = normalizeProps(props) as IMyPanelProps
            return <MyPanel {...p}>{p.children}</MyPanel>
        })
    })

    return defs
}

// 默认立即注册一次（可选）。如果不希望自动注册，可删除此调用。
// 在 SSR 或构建时环境没有 window 时会跳过。
if (typeof window !== 'undefined') {
    try { registerMyUIWebComponents() } catch {/* ignore */ }
}

