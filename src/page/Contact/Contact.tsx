//Components
import { FormEvent } from "react";
import Button from "../../components/atoms/Button/Button";
import Input from "../../components/atoms/Input/Input";
import Mark from "../../components/atoms/Mark/Mark";
import TextArea from "../../components/atoms/TextArea/TextArea";
import Title from "../../components/atoms/Title/Title";
import Container from "../../components/molecules/Container/Container";

//Styles
import "./Contact.scss";

const Contact = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Dato enviados");
    };

    return (
        <Container className="Contact">
            <div className="co_int">
                <div className="co_left">
                    <Title title="Contact" />
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
                            <Button text="Send" type="submit" />
                        </div>
                    </form>
                </div>
                <div className="co_right">
                    <Mark size={3} />
                </div>
            </div>
        </Container>
    );
};

export default Contact;
