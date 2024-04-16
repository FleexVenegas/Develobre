//Styles
import React from "react";
import "./TextArea.scss";
import { InputProps } from "../../../interfaces/interfaces.interface";

const TextArea: React.FC<InputProps> = ({
    className,
    text,
    placeholder,
    name,
    value,
    onChange,
}) => {
    return (
        <div className={`TextArea ${className}`}>
            {text && <span className="span_title">{text}</span>}
            <textarea
                className="input-textare"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TextArea;
