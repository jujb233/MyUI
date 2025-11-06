import { useMyPanel } from "../../../Hooks";
import { usePanelContext } from "../MyPanel";
import MyTitle from "../../Parts/myTitle/myTitle";
import { type Component, type JSX, Show } from "solid-js";

const PanelHeader: Component<{ title?: JSX.Element }> = (props) => {
    const context = usePanelContext();
    const styles = useMyPanel(context);
    return (
        <Show when={props.title}>
            <MyTitle level={2} class={styles.header}>{props.title}</MyTitle>
        </Show>
    );
};

export default PanelHeader
