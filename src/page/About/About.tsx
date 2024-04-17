import Title from "../../components/atoms/Title/Title";

//Styles
import "./About.scss";
import Mark from "../../components/atoms/Mark/Mark";

const About = () => {
    return (
        <div className="About">
            <div className="cnt_resume">
                <Title title="About" />
                <div className="res_left">
                    At Develobre, we are dedicated to offering quality services
                    and innovative solutions for our clients. Our highly skilled
                    software development team strives to understand each
                    client's needs and develop customized strategies to drive
                    their success. We value transparency, integrity and
                    excellence in everything we do, and are committed to
                    building strong relationships with our clients based on
                    trust and respect. We are here to help you achieve your
                    business goals. Contact us today to get started!
                </div>
            </div>
            <div className="res_right">
                <Mark className="about_mark" />
            </div>
        </div>
    );
};

export default About;
