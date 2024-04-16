//components
import { useEffect } from "react";
import Description from "../../components/atoms/Description/Description";
import Mark from "../../components/atoms/Mark/Mark";
import Title from "../../components/atoms/Title/Title";
import Container from "../../components/molecules/Container/Container";

//Styles
import "./PrivacyPolicies.scss";
import ReturnButton from "../../components/atoms/ReturnButton/ReturnButton";

const PrivacyPolicies = () => {
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
        <Container className="PrivacyPolicies">
            <ReturnButton url="/"/>
            <div className="cnt_priv">
                <Title title="Privacy Policies" />
                <div className="cnt_info">
                    <Description>
                        At Develobre we respect your privacy and are committed
                        to protecting the personal information you provide us.
                        This privacy policy describes how we collect, use and
                        protect your information when you visit our website or
                        use our services.
                    </Description>
                    <div className="block_info">
                        <h2 className="block_title">Information we collect</h2>
                        <Description>
                            We collect personal information that you voluntarily
                            provide to us when you register on our website,
                            communicate with us through online forms, or
                            otherwise interact with us. This information may
                            include your name, email address, telephone number,
                            and any other information you choose to provide to
                            us.
                        </Description>
                    </div>
                    <div className="block_info">
                        <h2 className="block_title">Use of Information</h2>
                        <Description>
                            Utilizamos la información que recopilamos para
                            proporcionarte nuestros servicios, responder a tus
                            consultas, mejorar nuestro sitio web y comunicarnos
                            contigo sobre productos, servicios y promociones que
                            creemos que pueden ser de tu interés.
                            <br />
                            No compartimos tu información personal con terceros,
                            excepto cuando sea necesario para proporcionar
                            nuestros servicios o cumplir con la ley.
                        </Description>
                    </div>
                    <div className="block_info">
                        <h2 className="block_title">Cookies</h2>
                        <Description>
                            We use cookies and similar technologies to improve
                            your experience on our website. You can set your
                            browser to reject all cookies or to alert you when a
                            cookie is being sent. However, if you disable
                            cookies, some parts of our website may not function
                            properly.
                        </Description>
                    </div>
                    <div className="block_info">
                        <h2 className="block_title">
                            Security of the information
                        </h2>
                        <Description>
                            We take reasonable security measures to protect your
                            personal information against loss, misuse and
                            unauthorized access. However, you should be aware
                            that no data transmission over the Internet or
                            electronic storage is completely secure and we
                            cannot guarantee the absolute security of your
                            information.
                        </Description>
                    </div>
                    <div className="block_info">
                        <h2 className="block_title">
                            Changes to the Privacy Policy
                        </h2>
                        <Description>
                            We reserve the right to modify this privacy policy
                            at any time. We recommend that you periodically
                            review this page to be aware of any changes. Your
                            continued use of our website following the posting
                            of changes to this policy will constitute your
                            acceptance of those changes.
                        </Description>
                    </div>
                    <div className="block_info">
                        <h2 className="block_title">Contact</h2>
                        <Description>
                            If you have any questions about this privacy policy,
                            please contact us at develobre@develobre.com
                        </Description>
                    </div>
                    <Description>Last update: April 11, 2024.</Description>
                </div>
                <Mark className="priv_mark" />
            </div>
        </Container>
    );
};

export default PrivacyPolicies;
