import React from "react";

const ButtonIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <span className="mr-2 flex items-center">{icon}</span>
);

export default ButtonIcon;
