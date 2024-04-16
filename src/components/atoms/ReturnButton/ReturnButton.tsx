import "./ReturnButton.scss";

//Assets
import ArrowLeft from "../../../assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const ReturnButton = () => {


    const navigate = useNavigate()

    return (
        <button className="ReturnButton" onClick={() => navigate('/')}>
            <img src={ArrowLeft} alt="" className="img-b" />
        </button>
    );
};

export default ReturnButton;
