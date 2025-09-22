import React from 'react';

type NavBarProps = {
    onSelectContent: (content: "buttons" | "cards" | "panels") => void;
};

const NavBar: React.FC<NavBarProps> = ({ onSelectContent }) => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="font-bold text-xl text-gray-800">MyUI Demos</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <button onClick={() => onSelectContent("buttons")} className="nav-link">Buttons</button>
                            <button onClick={() => onSelectContent("cards")} className="nav-link">Cards</button>
                            <button onClick={() => onSelectContent("panels")} className="nav-link">Panels</button>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .nav-link {
                    padding: 0.5rem 1rem;
                    border-radius: 0.375rem;
                    font-weight: 500;
                    color: #4b5563;
                    transition: background-color 0.2s, color 0.2s;
                }
                .nav-link:hover {
                    background-color: #f3f4f6;
                    color: #1f2937;
                }
            `}</style>
        </nav>
    );
};

export default NavBar;
