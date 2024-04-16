import { useEffect } from "react";

//Styles
import "./FAQ.scss";

//Components
import ReturnButton from "../../components/atoms/ReturnButton/ReturnButton";
import Container from "../../components/molecules/Container/Container";
import Accordion from "../../components/organisms/Accordion/Accordion";
import Title from "../../components/atoms/Title/Title";
import Mark from "../../components/atoms/Mark/Mark";

const FAQ = () => {
    useEffect(() => {
        const scrollToMyRef = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

        scrollToMyRef();
    }, []);

    const data = [
        {
            id: 1,
            question: "What types of websites can I get?",
            answer: "I offer a wide range of web development services to meet various needs. From e-commerce websites for selling products online, to dynamic blogs for sharing content, business landing pages to promote your brand and services, and informative websites to highlight your business and attract potential customers.",
        },
        {
            id: 2,
            question: "What is the development process you follow?",
            answer: "My development process begins with a detailed consultation to understand your specific goals and needs. Then, we work together on project design and planning. Once the direction is established, I proceed with website development, conducting rigorous testing to ensure its optimal functionality and performance before final delivery.",
        },
        {
            id: 3,
            question:
                "Do you offer web design services in addition to development?",
            answer: "Yes, in addition to web development, I also provide web design services. I collaborate with talented designers to create a visually appealing and consistent experience for your website. This ensures that not only does your website perform excellently, but it also has an exceptional appearance.",
        },
        {
            id: 4,
            question: "What technologies do you use in website development?",
            answer: "I use a variety of modern technologies and tools in website development to ensure high-quality results and optimal performance. This includes languages such as HTML, CSS, and JavaScript, as well as frontend frameworks like React and Angular. Additionally, I work with content management systems (CMS) like WordPress for projects requiring flexibility and ease of maintenance.",
        },
        {
            id: 5,
            question:
                "Do you offer maintenance and support after website launch?",
            answer: "Yes, I offer ongoing maintenance and support services to ensure your website continues to run smoothly even after launch. This includes security updates, bug fixes, performance optimization, and technical support for any queries or issues you may have. My goal is to ensure your website is always in its best state and delivers lasting results.",
        },
    ];

    return (
        <Container className="FAQ">
            <ReturnButton url="/" />
            <div className="cnt_faq">
                <Title title="FAQ" />
                <Accordion data={data} />
                <Mark className="faq_mark"/>
            </div>
        </Container>
    );
};

export default FAQ;
