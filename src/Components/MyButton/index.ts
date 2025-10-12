import ButtonRoot from "./MyButton"

// Only export the root component. Subcomponents and context are intentionally not exported.
export const MyButton = ButtonRoot
export default MyButton
export type { MyButtonProps } from './myButtonProps'
