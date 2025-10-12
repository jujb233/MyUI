import PanelRoot from "./MyPanel"

// Only export the root component. Subcomponents and context are intentionally not exported.
export const MyPanel = PanelRoot
export default MyPanel
export type { MyPanelProps } from './myPanelProps'
