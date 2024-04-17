import React from "react";
import { useNavigate } from "react-router-dom";

//Styles
import "./ReturnButton.scss";

//Assets
import ArrowLeft from "../../../assets/icons/arrow-left.svg";

//Interfaces
interface ReturnProps {
    className?: string;
    url?: string;
}

const ReturnButton: React.FC<ReturnProps> = ({ url = "", className = "" }) => {
    const navigate = useNavigate();

    return (
        <button
            className={`ReturnButton ${className}`}
            onClick={() => navigate(url)}
        >
            <img src={ArrowLeft} alt="" className="img-b" />
        </button>
    );
};

export default ReturnButton;
