import React from "react";

//Interfaces
import { PropsChildren } from "../../../interfaces/interfaces.interface";

//Styles
import "./Description.scss";

const Description: React.FC<PropsChildren> = ({ children, className }) => {
    return (
        <div className={`Description ${className}`}>
            <p className="in-desc">{children}</p>
        </div>
    );
};

export default Description;
