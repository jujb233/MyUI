import MyButtonRoot from "./MyButton";
import ButtonOptions from "./subcomponents/ButtonOptions";
import ButtonContent from "./subcomponents/ButtonContent";
import ButtonIcon from "./subcomponents/ButtonIcon";
import type { Component } from "solid-js";
import type { IMyButtonProps } from "./types";

type MyButtonComponent = Component<IMyButtonProps> & {
    Options: typeof ButtonOptions;
    Content: typeof ButtonContent;
    Icon: typeof ButtonIcon;
};

const MyButton: MyButtonComponent = Object.assign(MyButtonRoot, {
    Options: ButtonOptions,
    Content: ButtonContent,
    Icon: ButtonIcon,
});

export { MyButton };
export default MyButton;
export * from "./types";
