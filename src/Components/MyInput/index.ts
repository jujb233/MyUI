import MyInputRoot from "./MyInput"
import InputOptions from "./subcomponents/InputOptions"
import InputIcon from "./subcomponents/InputIcon"
import type { Component } from "solid-js"
import type { IMyInputProps } from "./types"

type MyInputComponent = Component<IMyInputProps> & {
    Options: typeof InputOptions
    Icon: typeof InputIcon
}

const MyInput: MyInputComponent = Object.assign(MyInputRoot, {
    Options: InputOptions,
    Icon: InputIcon,
})

export { MyInput }
export default MyInput
export * from "./types"
