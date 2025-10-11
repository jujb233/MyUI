import React from "react"
import { usePanelContext } from "./PanelContext"

const PanelHeader: React.FC<{ title?: React.ReactNode }> = ({ title }) => {
    const { styles } = usePanelContext()
    if (!title) return null
    return <h2 className={styles.header}>{title}</h2>
}

export default PanelHeader
