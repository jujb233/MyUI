import MyButtonRoot from "./MyButton";
import ButtonActions from "./subcomponents/ButtonActions";
import ButtonContent from "./subcomponents/ButtonContent";
import ButtonIcon from "./subcomponents/ButtonIcon";
import type { Component } from "solid-js";
import type { IMyButtonProps } from "./types";

type MyButtonComponent = Component<IMyButtonProps> & {
    Actions: typeof ButtonActions;
    Content: typeof ButtonContent;
    Icon: typeof ButtonIcon;
};

const MyButton: MyButtonComponent = Object.assign(MyButtonRoot, {
    Actions: ButtonActions,
    Content: ButtonContent,
    Icon: ButtonIcon,
});

export { MyButton };
export default MyButton;
export * from "./types";
