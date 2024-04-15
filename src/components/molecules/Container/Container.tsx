import React from "react";

//Styles
import "./Container.scss"

//Interfaces
import { PropsChildren } from "../../../interfaces/interfaces.interface";

const Container: React.FC<PropsChildren> = ({ children, className }) => {
    return <section className={`Container ${className}`}>{children}</section>;
};

export default Container;
