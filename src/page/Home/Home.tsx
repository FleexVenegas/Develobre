import { useEffect, useState } from "react";
//Styles
import "./Home.scss";
//Components
import Container from "../../components/molecules/Container/Container";
import Button from "../../components/atoms/Button/Button";
import ServicesCard from "../ServicesCard/ServicesCard";
import About from "../About/About";
import Benefits from "../Benefits/Benefits";
import Services from "../Services/Services";
import Calendar from "../Calendar/Calendar";
import Reviews from "../Reviews/Reviews";

//Assets
import ImageSin from "../../assets/images/imag1sin.png";
import ArrowUp from "../../assets/icons/arrow_up.svg";

const Home = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollToMyRef = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 400;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <Container>
                <div className="Home" id="devehome45">
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
            <Container className="Cnt_calendar">
                <Calendar />
            </Container>
            <Container className="Cnt_reviews">
                <Reviews />
            </Container>
            <div
                className={`btn_scroll ${scrolled ? "showBtn" : ""}`}
                onClick={scrollToMyRef}
            >
                <img src={ArrowUp} alt="" className="arrow_up" />
            </div>
        </>
    );
};

export default Home;
