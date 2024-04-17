import { FormEvent, useEffect } from "react";

//Components
import Button from "../../components/atoms/Button/Button";
import Input from "../../components/atoms/Input/Input";
import Mark from "../../components/atoms/Mark/Mark";
import TextArea from "../../components/atoms/TextArea/TextArea";
import Title from "../../components/atoms/Title/Title";
import Container from "../../components/molecules/Container/Container";

//Styles
import "./Contact.scss";
import Description from "../../components/atoms/Description/Description";

const Contact = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Dato enviados");
    };

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
        <Container className="Contact">
            <div className="co_int">
                <div className="co_left">
                    <Title title="Contact" className="contact_title" />
                    <form onSubmit={handleSubmit} className="form">
                        <Input text="Full name" placeholder="Thomas Edison" />
                        <div className="cnt_email">
                            <Input
                                text="Email"
                                placeholder="thomas.edison@example.com"
                                type="email"
                            />
                            <Input
                                text="Phone"
                                placeholder="+52 33 *********"
                                type="number"
                            />
                        </div>
                        <TextArea text="Message" placeholder="Message" />
                        <div className="cnt-button">
                            <Button
                                text="Send"
                                type="submit"
                                className="cont_btn"
                            />
                        </div>
                    </form>
                </div>
                <div className="co_right">
                    <div className="right_title">
                        <Title title="Contact" />
                    </div>
                    <Description className="desc_cont">
                        Contact us to start the quote process! We are here to
                        help you find the best solution for your needs. Contact
                        our team today and let's get started. I look forward to
                        working with you!
                    </Description>
                    <Mark size={1.5} className="cont_mark" />
                </div>
            </div>
        </Container>
    );
};

export default Contact;
