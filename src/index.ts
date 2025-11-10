import { ensureMyUIStyles, setMyUIStyles } from './global-styles'
import styles from './index.css?inline'

setMyUIStyles(() => styles)

if (typeof document !== 'undefined') ensureMyUIStyles()

// Solid.js Components
export * from './Components/MyButton';
export * from './Components/MyCard';
export * from './Components/MyNav';
export * from './Components/MyPanel';
export * from './Components/MyInput';

// Web Components
export { registerMyUIWebComponents } from './web-components';
export type { MyUIWebComponentTagNames } from './web-components';
export { ensureMyUIStyles } from './global-styles';
