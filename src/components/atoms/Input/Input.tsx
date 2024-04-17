import React from "react";

//Styles
import "./Input.scss";

//Interfaces
import { InputProps } from "../../../interfaces/interfaces.interface";

const Input: React.FC<InputProps> = ({
    className,
    text,
    placeholder,
    name,
    value,
    onChange,
    type = "text",
}) => {
    return (
        <div className={`Input ${className}`}>
            {text && <span className="span_title">{text}</span>}
            <input
                type={type}
                className="input-input"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
};

export default Input;
