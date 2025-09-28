import React from "react";

const PanelHeader: React.FC<{ title?: React.ReactNode }> = ({ title }) => {
    if (!title) return null;
    return <h2 className="text-2xl font-bold mb-4">{title}</h2>;
};

export default PanelHeader;
