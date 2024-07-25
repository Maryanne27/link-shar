import { PLATFORMS } from "../../../lib/platforms";
import Option from "./Option";
import Chevron from "../../../assets/Chevron";
import { useState } from "react";

export default function Select({ selectedPlatform, changePlatform }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (platform) => {
        changePlatform(platform);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div 
                className={`dropdown-layout dropdown-style ${isOpen ? 'dropdown-styles-active' : ''}`} 
                onClick={toggleDropdown}
            >
                <span>{selectedPlatform}</span>
                <Chevron className={`transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </div>
            {isOpen && (
                <div className="absolute mt-2 w-full dropdown-list-layout dropdown-list-styles shadow-purple-shadow">
                    {PLATFORMS.map((platform) => (
                        <div 
                            key={platform}
                            className={`dropdown-option p-2 ${selectedPlatform === platform ? 'text-purple' : ''}`}
                            onClick={() => handleSelect(platform)}
                        >
                            <span>{platform}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
