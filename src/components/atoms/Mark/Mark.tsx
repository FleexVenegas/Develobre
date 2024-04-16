import React from "react";


//Styles
import "./Mark.scss";

//Interface
interface MarkProps{
    className?: string
    size?: number
}

const Mark: React.FC<MarkProps> = ({ className, size = 2 }) => {
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
                        width: size,
                        height: size
                    }}
                ></div>
            ))}
        </div>
    );
};

export default Mark;
