
//Assets
import Figma from "../../assets/icons/figma.svg";
import Computer from "../../assets/icons/desktop.svg";
import Responsive from "../../assets/icons/smartphone-tablet.svg";
import Multi from "../../assets/icons/multi.svg";

//Styles
import "./ServicesCard.scss";

const ServicesCard = () => {
    const data = [
        {
            id: 1,
            image: Figma,
            title: "Web Designe",
            description:
                "Unleash your potential online with our creative web design. " +
                "We transform ideas into captivating visual experiences that " +
                "stand out and connect you with your audience in unique " +
                "and exciting ways.",
        },
        {
            id: 2,
            image: Computer,
            title: "Web Developer",
            description:
                "Boost your online presence with cutting-edge web development. " + 
                "We create powerful, customized websites that meet your " + 
                "business goals and captivate your audience, boosting your online success.",
        },
        {
            id: 3,
            image: Responsive,
            title: "Responsive",
            description:
                "Transform your online presence with responsive web design. From desktop " + 
                "to mobile, we create captivating experiences that adapt perfectly to every "  + 
                "screen, ensuring your site stands out on any device.",
        },
        {
            id: 4,
            image: Multi,
            title: "Multi platform",
            description:
                "Wake up your online presence and conquer all devices. We create " + 
                "impactful web experiences that scale seamlessly, from desktop " + 
                "to mobile. Your site will shine on any screen.",
        },
    ];

    return (
        <div className="ServicesCard">
            {data.map((_, idx) => (
                <article key={idx} className="cnt_acrticle">
                    <div className="cnt_image">
                        <img src={_.image} alt="" className="img_article" />
                    </div>
                    <h2 className="arti-title">{_.title}</h2>
                    <p className="art-desc">{_.description}</p>
                </article>
            ))}
        </div>
    );
};

export default ServicesCard;
