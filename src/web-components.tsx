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

// 子组件类型（仅需要 children，不暴露复杂 props）
type SimpleSlotProps = { children?: any }

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

    // ---------- Button 系列 ----------
    defineOnce(`${prefix}-button`, () => {
        customElement<IMyButtonProps>(`${prefix}-button`, {}, (props) => {
            const p = normalizeProps(props) as IMyButtonProps
            return <MyButton {...p}>{p.children}</MyButton>
        })
    })
    defineOnce(`${prefix}-button-icon`, () => {
        // 允许 icon="✅" 或子节点形式
        customElement<{ icon?: string } & SimpleSlotProps>(`${prefix}-button-icon`, {}, (props) => {
            const iconNode = props.children || (props.icon ? props.icon : null)
            return <MyButton.Icon icon={iconNode as any} />
        })
    })
    defineOnce(`${prefix}-button-content`, () => {
        customElement<SimpleSlotProps>(`${prefix}-button-content`, {}, (props) => <MyButton.Content>{props.children}</MyButton.Content>)
    })
    defineOnce(`${prefix}-button-options`, () => {
        customElement<SimpleSlotProps>(`${prefix}-button-options`, {}, (props) => <MyButton.Options>{props.children}</MyButton.Options>)
    })

    // ---------- Card 系列 ----------
    defineOnce(`${prefix}-card`, () => {
        customElement<IMyCardProps>(`${prefix}-card`, {}, (props) => {
            const p = normalizeProps(props) as IMyCardProps
            return <MyCard {...p}>{p.children}</MyCard>
        })
    })
    defineOnce(`${prefix}-card-options`, () => {
        customElement<SimpleSlotProps>(`${prefix}-card-options`, {}, (props) => <MyCard.Options>{props.children}</MyCard.Options>)
    })
    defineOnce(`${prefix}-card-content`, () => {
        customElement<SimpleSlotProps>(`${prefix}-card-content`, {}, (props) => <MyCard.Content>{props.children}</MyCard.Content>)
    })
    defineOnce(`${prefix}-card-footer`, () => {
        customElement<SimpleSlotProps>(`${prefix}-card-footer`, {}, (props) => <MyCard.Footer>{props.children}</MyCard.Footer>)
    })
    defineOnce(`${prefix}-card-header`, () => {
        customElement<SimpleSlotProps>(`${prefix}-card-header`, {}, (props) => <MyCard.Header>{props.children}</MyCard.Header>)
    })
    defineOnce(`${prefix}-card-tags`, () => {
        customElement<SimpleSlotProps & { tags?: string }>(`${prefix}-card-tags`, {}, (props) => {
            const raw = (props as any).tags
            let list: any[] = []
            if (typeof raw === 'string') list = raw.split(',').map(s => s.trim()).filter(Boolean)
            // 若没有 tags 属性，允许使用子元素作为 tag 内容（每个子节点包裹成独立标签）
            if (!raw && props.children) {
                const childrenArray = Array.isArray(props.children) ? props.children : [props.children]
                list = childrenArray
            }
            return <MyCard.Tags tags={list as any} />
        })
    })
    defineOnce(`${prefix}-card-image`, () => {
        customElement<SimpleSlotProps & { src?: string }>(`${prefix}-card-image`, {}, (props) => <MyCard.Image src={(props as any).src || ''} />)
    })

    // ---------- Nav 系列 ----------
    defineOnce(`${prefix}-nav`, () => {
        customElement<IMyNavProps>(`${prefix}-nav`, {}, (props) => {
            const p = normalizeProps(props) as IMyNavProps
            return <MyNav {...p}>{p.children}</MyNav>
        })
    })
    defineOnce(`${prefix}-nav-brand`, () => {
        customElement<SimpleSlotProps>(`${prefix}-nav-brand`, {}, (props) => <MyNav.Brand>{props.children}</MyNav.Brand>)
    })
    defineOnce(`${prefix}-nav-menu`, () => {
        customElement<SimpleSlotProps>(`${prefix}-nav-menu`, {}, (props) => <MyNav.Menu>{props.children}</MyNav.Menu>)
    })
    defineOnce(`${prefix}-nav-options`, () => {
        customElement<SimpleSlotProps>(`${prefix}-nav-options`, {}, (props) => <MyNav.Options>{props.children}</MyNav.Options>)
    })
    defineOnce(`${prefix}-nav-content`, () => {
        customElement<SimpleSlotProps>(`${prefix}-nav-content`, {}, (props) => <MyNav.Content>{props.children}</MyNav.Content>)
    })

    // ---------- Panel 系列 ----------
    defineOnce(`${prefix}-panel`, () => {
        customElement<IMyPanelProps>(`${prefix}-panel`, {}, (props) => {
            const p = normalizeProps(props) as IMyPanelProps
            return <MyPanel {...p}>{p.children}</MyPanel>
        })
    })
    defineOnce(`${prefix}-panel-header`, () => {
        customElement<SimpleSlotProps>(`${prefix}-panel-header`, {}, (props) => <MyPanel.Header title={props.children as any} />)
    })
    defineOnce(`${prefix}-panel-content`, () => {
        customElement<SimpleSlotProps>(`${prefix}-panel-content`, {}, (props) => <MyPanel.Content>{props.children}</MyPanel.Content>)
    })
    defineOnce(`${prefix}-panel-footer`, () => {
        customElement<SimpleSlotProps>(`${prefix}-panel-footer`, {}, (props) => <MyPanel.Footer>{props.children}</MyPanel.Footer>)
    })
    defineOnce(`${prefix}-panel-background`, () => {
        customElement<SimpleSlotProps & { src?: string }>(`${prefix}-panel-background`, {}, (props) => <MyPanel.Background backgroundImage={(props as any).src || ''} />)
    })

    return defs
}

/**
 * 导出 Web Components 的标签名和属性类型，用于 TypeScript 类型提示。
 * 这使得在 JSX 或 TSX 中使用自定义元素时，可以获得自动补全和类型检查。
 */
export type MyUIWebComponentTagNames = {
    'myui-button': IMyButtonProps & { children?: any };
    'myui-button-icon': { icon?: string } & SimpleSlotProps;
    'myui-button-content': SimpleSlotProps;
    'myui-button-options': SimpleSlotProps;
    'myui-card': IMyCardProps & { children?: any };
    'myui-card-options': SimpleSlotProps;
    'myui-card-content': SimpleSlotProps;
    'myui-card-footer': SimpleSlotProps;
    'myui-card-title': SimpleSlotProps;
    'myui-card-tags': { tags?: string } & SimpleSlotProps;
    'myui-card-image': { src?: string } & SimpleSlotProps;
    'myui-nav': IMyNavProps & { children?: any };
    'myui-nav-title': SimpleSlotProps;
    'myui-nav-menu': SimpleSlotProps;
    'myui-nav-options': SimpleSlotProps;
    'myui-nav-content': SimpleSlotProps;
    'myui-panel': IMyPanelProps & { children?: any };
    'myui-panel-title': SimpleSlotProps;
    'myui-panel-content': SimpleSlotProps;
    'myui-panel-footer': SimpleSlotProps;
    'myui-panel-background': { src?: string } & SimpleSlotProps;
};

// 默认立即注册一次（可选）。如果不希望自动注册，可删除此调用。
// 在 SSR 或构建时环境没有 window 时会跳过。
if (typeof window !== 'undefined') {
    try { registerMyUIWebComponents() } catch {/* ignore */ }
}

