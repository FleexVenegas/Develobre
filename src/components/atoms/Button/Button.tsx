import React from "react";

//Styles
import "./Button.scss";

// Interfaces
interface ButtonProps {
    className?: string;
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, text, type, onClick }) => {
    return (
        <button className={`Button ${className}`} type={type} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
