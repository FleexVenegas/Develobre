import { useEffect } from "react";
import Description from "../../components/atoms/Description/Description";
import ReturnButton from "../../components/atoms/ReturnButton/ReturnButton";
import Title from "../../components/atoms/Title/Title";
import Container from "../../components/molecules/Container/Container";
import "./LegalWarning.scss";
import Mark from "../../components/atoms/Mark/Mark";

const LegalWarning = () => {
    useEffect(() => {
        const scrollToMyRef = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

        scrollToMyRef();
    }, []);

    return (
        <Container className="LegalWarning">
            <ReturnButton url="/" />
            <div className="cnt_legal">
                <Title title="Legal Warning" />
                <p className="subtilt">Welcome to Develobre</p>
                <div className="in_info">
                    <Description>
                        This legal notice sets out the terms and conditions for
                        the use of our website and related services. By
                        accessing and using this website, you accept these terms
                        in full. If you do not agree to these terms, please do
                        not use our website.
                    </Description>
                    <Description>
                        <span className="sun_span">
                            Intellectual property:{" "}
                        </span>
                        All content on this website, including text, images and
                        logos, is protected by copyright and other intellectual
                        property rights.
                    </Description>
                    <Description>
                        <span className="sun_span">Use of the Website: </span>
                        Use this website in a lawful and responsible manner,
                        without infringing the rights of third parties or
                        causing damage.
                    </Description>
                    <Description>
                        <span className="sun_span">Responsibility: </span>
                        We do not guarantee the accuracy or completeness of the
                        content on this website. You use this site at your own
                        risk, and we are not responsible for any damages you may
                        suffer.
                    </Description>
                    <Description>
                        <span className="sun_span">Third-Party Links: </span>
                        Links to third-party websites are provided solely for
                        your convenience. We are not responsible for the content
                        of these sites.
                    </Description>
                    <Description>
                        <span className="sun_span">
                            Changes to the Legal Notice:{" "}
                        </span>
                        We reserve the right to modify this legal notice at any
                        time. We recommend reviewing it periodically to stay
                        informed of any changes.
                    </Description>
                    <Description>
                        If you have any questions regarding this legal notice,
                        please contact us at develobre@develobre.com.
                    </Description>
                </div>
                <Mark className="bg_mark" />
            </div>
        </Container>
    );
};

export default LegalWarning;
