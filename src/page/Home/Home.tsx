//Styles
import "./Home.scss";
//Components
import Container from "../../components/molecules/Container/Container";
import Button from "../../components/atoms/Button/Button";

//Assets
import ImageSin from "../../assets/images/imag1sin.png";
import ServicesCard from "../ServicesCard/ServicesCard";
import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import Services from "../Services/Services";

const Home = () => {
    return (
        <>
            <Container>
                <div className="Home">
                    <div className="home_left">
                        <div className="cnt_text">
                            <h1 className="h-text">
                                Take your business to the next{" "}
                                <span className="span-level">LEVEL</span>
                            </h1>
                            <Button text="Aprender más" />
                        </div>
                    </div>
                    <div className="home_right">
                        <div className="cnt_img"></div>
                        <img src={ImageSin} alt="" className="img_com" />
                    </div>
                </div>
            </Container>
            <ServicesCard />
            <Container className="Cnt_about">
                <About />
            </Container>
            <Container>
                <Benefits />
            </Container>
            <Container>
                <Services />
            </Container>
        </>
    );
};

export default Home;
