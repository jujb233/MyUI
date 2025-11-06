import { type Component, splitProps } from "solid-js";
import ButtonContent from "./subcomponents/ButtonContent"
import ButtonIcon from "./subcomponents/ButtonIcon"
import ButtonActions from "./subcomponents/ButtonActions"
import type { IMyButtonProps, IMyButtonContext } from "./types"
import { ErrorBoundary } from "../../Utils"
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
    ]);

    // 通过 hook 计算最终 className 与子槽位类
    const { rootClass } = useMyButton(others)

    const contextValue: IMyButtonContext = {
        ...others
    }

    return (
        <ErrorBoundary fallback={<div class="border border-red-500 p-2">Button component failed to render.</div>}>
            {/* 使用 Provider 将当前按钮的状态/风格传递给内部子组件 */}
            <ButtonProvider value={contextValue}>
                <button
                    type={local.buttonType || "button"}
                    disabled={local.disabled}
                    onClick={(e) => {
                        
                        local.onClick && local.onClick(e as MouseEvent);
                    }}
                    class={rootClass}
                >
                    {/* 图标和 actions 的判断逻辑交给子组件内部 */}
                    <ButtonIcon icon={local.icon} />
                    <ButtonContent>{local.children}</ButtonContent>
                    <ButtonActions>{local.options}</ButtonActions>
                </button>
            </ButtonProvider>
        </ErrorBoundary>
    )
}

export default MyButton
