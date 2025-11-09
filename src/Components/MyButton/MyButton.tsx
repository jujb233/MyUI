import { type Component, splitProps } from "solid-js"
import ButtonContent from "./subcomponents/ButtonContent"
import ButtonIcon from "./subcomponents/ButtonIcon"
import ButtonOptions from "./subcomponents/ButtonOptions"
import type { IMyButtonProps, IMyButtonContext } from "./types"
import { ErrorCheck } from "../../Utils"
import { useMyButton } from "../../Hooks"
import { createSubcomponentContext } from "../../Utils/componentFactory"

export const [useButtonContext, ButtonProvider] = createSubcomponentContext<IMyButtonContext>('MyButton')

const MyButton: Component<IMyButtonProps> = (props) => {
    const [local, others] = splitProps(props, [
        "buttonType",
        "children",
        "icon",
        "options",
        "disabled",
        "onClick"
    ])

    // 通过 hook 计算最终 className 与子槽位类
    const { rootClass, rootStyle, slots } = useMyButton(others as any)

    // slots 可能为 undefined，需保证类型安全
    const contextValue: IMyButtonContext = {
        ...others,
        slots: {
            icon: typeof slots?.icon === 'string' ? slots.icon : '',
            content: typeof slots?.content === 'string' ? slots.content : '',
            options: typeof slots?.options === 'string' ? slots.options : ''
        }
    }

    return (
        <ErrorCheck fallback={<div class="border border-red-500 p-2">Button component failed to render.</div>}>
            {/* 使用 Provider 将当前按钮的状态/风格传递给内部子组件 */}
            <ButtonProvider value={contextValue}>
                <button
                    type={local.buttonType || "button"}
                    disabled={local.disabled}
                    onClick={(e) => {

                        local.onClick && local.onClick(e as MouseEvent)
                    }}
                    class={rootClass}
                    style={rootStyle}
                >
                    {/* 图标和 actions 的判断逻辑交给子组件内部 */}
                    <ButtonIcon icon={local.icon} />
                    <ButtonContent>{local.children}</ButtonContent>
                    <ButtonOptions>{local.options}</ButtonOptions>
                </button>
            </ButtonProvider>
        </ErrorCheck>
    )
}

export default MyButton
