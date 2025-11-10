import { type Component, splitProps } from "solid-js"
import InputIcon from "./subcomponents/InputIcon"
import InputOptions from "./subcomponents/InputOptions"
import type { IMyInputProps, IMyInputContext } from "./types"
import { InputProvider } from "./InputContext"
import { useMyInput } from "../../Hooks/Components/useMyInput"
import { ErrorCheck } from "../../Utils"

const MyInput: Component<IMyInputProps> = (props) => {
    const [local, others] = splitProps(props, [
        "inputType",
        "icon",
        "options",
        "disabled",
        "value",
        "placeholder",
        "onInput"
    ])

    const { rootClass, rootStyle, slots, extras } = useMyInput(others as any) as any

    const contextValue: IMyInputContext = {
        ...others,
        slots: {
            icon: slots?.icon || '',
            options: slots?.options || ''
        }
    }

    return (
        <ErrorCheck fallback={<div class="border border-red-500 p-2">Input component failed to render.</div>}>
            <InputProvider value={contextValue}>
                <div class={`${rootClass} ${others.class || ''}`} style={{ ...(rootStyle || {}), ...(others.style || {}) }}>
                    <InputIcon icon={local.icon} />
                    <input
                        type={local.inputType || 'text'}
                        value={local.value}
                        placeholder={local.placeholder}
                        disabled={local.disabled}
                        onInput={(e) => local.onInput && local.onInput(e)}
                        class={extras?.inputInnerClass || 'flex-1 bg-transparent outline-none px-1 disabled:opacity-60'}
                    />
                    <InputOptions>{local.options}</InputOptions>
                </div>
            </InputProvider>
        </ErrorCheck>
    )
}

export default MyInput
