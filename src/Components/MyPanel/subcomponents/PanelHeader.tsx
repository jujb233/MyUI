import React from "react";
import { useMyPanel } from "../../../Hooks";
import { usePanelContext } from "../MyPanel";

const PanelHeader: React.FC<{ title?: React.ReactNode }> = ({ title }) => {
    const context = usePanelContext();
    const styles = useMyPanel(context);
    if (!title) return null;
    return <h2 className={styles.header}>{title}</h2>;
};

export default PanelHeader
