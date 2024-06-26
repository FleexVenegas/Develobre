//Components
import Mark from "../../components/atoms/Mark/Mark";
import ReviewLetter from "../../components/atoms/ReviewLetter/ReviewLetter";
import Title from "../../components/atoms/Title/Title";

//Styles
import "./Reviews.scss";

const Reviews = () => {
    return (
        <div className="Reviews">
            <Title title="Reviews" />
            <div className="cnt_review">
                <ReviewLetter />
            </div>
            <Mark className="rev-mark" />
        </div>
    );
};

export default Reviews;
