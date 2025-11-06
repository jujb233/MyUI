import { useMyPanel } from "../../../Hooks";
import { usePanelContext } from "../MyPanel";
import type { Component, JSX } from "solid-js";

const PanelContent: Component<{ children?: JSX.Element }> = (props) => {
    const context = usePanelContext();
    const styles = useMyPanel(context);
    return <div class={styles.content}>{props.children}</div>;
};

export default PanelContent
