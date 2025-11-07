import { customElement } from 'solid-element';
import MyButton from './Components/MyButton/MyButton';
import type { IMyButtonProps } from './Components/MyButton/types';

// 将 SolidJS 组件注册为自定义元素 (Web Component)
// 第一个参数是自定义元素的标签名
// 第二个参数是组件的默认 props
// 第三个参数是要包装的 SolidJS 组件
customElement<IMyButtonProps>('my-button', {}, MyButton);
