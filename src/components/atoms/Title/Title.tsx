import React from "react";

//Styles
import "./Title.scss";

interface TitleProps {
    title: string;
    description?: string;
    className?: string;
}

const Title: React.FC<TitleProps> = ({
    title,
    description,
    className = "",
}) => {
    return (
        <div className={`Title ${className}`}>
            <h2 className="title_h2">{title}</h2>
            {description && <p className="title_desc">{description}</p>}
        </div>  
    );
};

export default Title;
