//Styles
import React from "react";
import "./Mark.scss";
import { PropsChildren } from "../../../interfaces/interfaces.interface";

const Mark: React.FC<PropsChildren> = ({ className }) => {
    const elements = Array.from({ length: 50 }, (_, index) => ({
        id: index + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        moveUp: Math.random() < 0.5,
    }));
    return (
        <div className={`Mark ${className}`}>
            {elements.map((_, idx) => (
                <div
                    key={idx}
                    className={"star"}
                    style={{
                        top: _.top,
                        left: _.left,
                        animationDirection: _.moveUp ? "normal" : "reverse",
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Mark;
