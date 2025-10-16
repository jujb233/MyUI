import React from "react";
import { useMyPanel } from "../../../Hooks";
import { usePanelContext } from "../MyPanel";
import MyTitle from "../../Parts/myTitle/myTitle";

const PanelHeader: React.FC<{ title?: React.ReactNode }> = ({ title }) => {
    const context = usePanelContext();
    const styles = useMyPanel(context);
    if (!title) return null;
    return <MyTitle level={2} className={styles.header}>{title}</MyTitle>;
};

export default PanelHeader
