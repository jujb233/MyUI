import ButtonContent from "./subcomponents/ButtonContent"
import ButtonIcon from "./subcomponents/ButtonIcon"
import ButtonActions from "./subcomponents/ButtonActions"
import type { IMyButtonProps, IMyButtonContext } from "./types"
import { ErrorBoundary } from "../../Utils"
import { useMyButton } from "../../Hooks"
import { createSubcomponentContext } from "../../Utils/componentFactory"

export const [useButtonContext, ButtonProvider] = createSubcomponentContext<IMyButtonContext>('MyButton')

function MyButton(props: IMyButtonProps) {
    const {
        buttonType: htmlType = "button",
        onClick,
        children,
        icon,
        options,
        ...otherProps
    } = props

    // 通过 hook 计算最终 className 与子槽位类
    const { rootClass } = useMyButton(otherProps)

    const contextValue: IMyButtonContext = {
        ...otherProps
    }

    return (
        <ErrorBoundary fallback={<div className="border border-red-500 p-2">Button component failed to render.</div>}>
            {/* 使用 Provider 将当前按钮的状态/风格传递给内部子组件 */}
            <ButtonProvider value={contextValue}>
                <button
                    type={htmlType}
                    disabled={props.disabled}
                    onClick={onClick}
                    className={rootClass}
                >
                    {/* 图标和 actions 的判断逻辑交给子组件内部 */}
                    <ButtonIcon icon={icon} />
                    <ButtonContent>{children}</ButtonContent>
                    <ButtonActions>{options}</ButtonActions>
                </button>
            </ButtonProvider>
        </ErrorBoundary>
    )
}

export default MyButton
