//Styles
import "./Services.scss";

//Components
import Description from "../../components/atoms/Description/Description";
import Title from "../../components/atoms/Title/Title";
import SmallSlider from "../../components/molecules/SmallSlider/SmallSlider";
import Mark from "../../components/atoms/Mark/Mark";

const Services = () => {
    return (
        <div className="Services">
            <div className="in_servi">
                <Title title="Our Services" />
                <Description>
                    We offer a full range of services designed to meet the needs
                    of our clients and help them achieve their business
                    objectives. Our team of highly qualified and experienced
                    professionals is committed to providing high-quality,
                    customized solutions in every project we undertake. Discover
                    how our services can boost your business success
                </Description>
            </div>
            <div className="cnt_services">
                <SmallSlider />
            </div>
            <Mark className="cnt_mark" />
        </div>
    );
};

export default Services;
