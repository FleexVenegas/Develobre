
//Styles
import "./Benefits.scss";

//Assets
import Map from "../../assets/images/digital.png";

//Comonents
import Title from "../../components/atoms/Title/Title";
import Description from "../../components/atoms/Description/Description";

const Benefits = () => {
    return (
        <div className="Benefits">
            <div className="be-left">
                <img src={Map} alt="" className="map-img" />
            </div>
            <div className="be-right">
                <Title title="Benefits of having a website" />
                <Description>
                    In an increasingly digitalized world, having a strong online
                    presence is essential to the success of any business. We
                    explore the numerous benefits that a website can offer in
                    the current year. From increasing your online visibility to
                    improving customer engagement, a well-designed website can
                    make all the difference in the growth and prosperity of your
                    business.
                </Description>
            </div>
        </div>
    );
};

export default Benefits;
