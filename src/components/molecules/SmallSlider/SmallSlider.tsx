// Component
import { useState } from "react";
import "./SmallSlider.scss";

const SmallSlider: React.FC = () => {
    const [openMdal, setOpenMdal] = useState<number | null>(1);

    const handleMouseModal = (id: number) => {
        setOpenMdal(id);
    };

    const handleMouseModalLeave = () => {
        setOpenMdal(null);
    };

    const optionWork = [
        {
            id: 1,
            work: "Custom web design",
            description:
                "Creamos sitios web atractivos, funcionales " +
                "y completamente personalizados que destacan " +
                "la identidad de tu marca y brindan una experiencia " +
                "de usuario excepcional.",
        },
        {
            id: 2,
            work: "Social media management",
            description:
                "Maximize your online impact with our social media " +
                "management. We create content, engage with " +
                "your audience, and boost your visibility. " +
                "Free up time and amplify your digital presence!",
        },
        {
            id: 3,
            work: "Maintenance and Support",
            description:
                "We provide comprehensive maintenance and support solutions. " +
                "We keep your system in optimal condition and offer " +
                "expert technical assistance to ensure smooth operation.",
        },
        {
            id: 4,
            work: "Search Engine Optimization (SEO)",
            description:
                "We enhance your online visibility with SEO. " +
                "We optimize your website to appear higher in search " +
                "engine results, attracting more organic traffic and " +
                "potential customers.",
        },
    ];

    return (
        <div className={`SmallSlider`}>
            <div className={`Carousel-wrapper`}>
                {optionWork.map((_, index) => (
                    <div
                        className={`span_word`}
                        key={index}
                        onMouseEnter={() => handleMouseModal(_.id)}
                        onMouseLeave={handleMouseModalLeave}
                    >
                        <span
                            className={`span_show ${
                                openMdal === _.id ? "span_hidden" : ""
                            }`}
                        >
                            {_.work}
                        </span>

                        <div
                            className={`cnt_modal ${
                                openMdal === _.id ? "show_modal" : ""
                            }`}
                        >
                            <h2
                                className={`modal_title ${
                                    openMdal === _.id ? "show_title" : ""
                                }`}
                            >
                                {_.work}
                            </h2>
                            <p
                                className={`modal_des ${
                                    openMdal === _.id ? "show_desc" : ""
                                }`}
                            >
                                {_.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SmallSlider;
