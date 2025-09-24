import React from "react";

const PanelFooter: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <div className="mt-4">{children}</div>
);

export default PanelFooter;
