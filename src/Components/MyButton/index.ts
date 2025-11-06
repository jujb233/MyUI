import MyButtonRoot from "./MyButton"
import ButtonActions from "./subcomponents/ButtonActions"
import ButtonContent from "./subcomponents/ButtonContent"
import ButtonIcon from "./subcomponents/ButtonIcon"
import type { ICompoundComponent } from "../../Interfaces"
import type { IMyButtonProps } from "./types"

type MyButtonComponent = ICompoundComponent<IMyButtonProps> & {
    Actions: typeof ButtonActions
    Content: typeof ButtonContent
    Icon: typeof ButtonIcon
}

const MyButton = MyButtonRoot as MyButtonComponent

MyButton.Actions = ButtonActions
MyButton.Content = ButtonContent
MyButton.Icon = ButtonIcon

export { MyButton }
export default MyButton
export * from './types'
