import React from "react";

//Styles
import "./Button.scss";

// Interfaces
interface ButtonProps {
    className?: string;
    text: string;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ className, text, type }) => {
    return (
        <button className={`Button ${className}`} type={type}>
            {text}
        </button>
    );
};

export default Button;
