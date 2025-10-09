import ButtonRoot from "./MyButton"
import ButtonContent from "./ButtonContent"
import ButtonIcon from "./ButtonIcon"
import ButtonActions from "./ButtonActions"
import * as ButtonContext from "./ButtonContext"

export const MyButton = Object.assign(ButtonRoot, {
    Content: ButtonContent,
    Icon: ButtonIcon,
    Actions: ButtonActions,
})

export default MyButton

export { ButtonContent, ButtonIcon, ButtonActions }
export { ButtonContext }
export type { MyButtonProps } from './myButtonProps'
