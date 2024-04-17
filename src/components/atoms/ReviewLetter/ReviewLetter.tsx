import Description from "../Description/Description";
import "./ReviewLetter.scss";

const ReviewLetter = () => {
    const reviews = [
        {
            id: 1,
            review: "Excellent service and customer service. The Develobre team exceeded my expectations in every way. Highly recommended!",
            name: "María S.",
        },
        {
            id: 2,
            review: "I am very impressed with the quality of work done by Develobre. They are professional, friendly and always willing to help. I will definitely work with them again in the future!",
            name: "Juan M.",
        },
        {
            id: 3,
            review: "Incredible experience from start to finish! Develobre understood exactly what he needed and delivered exceptional results in record time. I will not hesitate to recommend them to my friends and colleagues.",
            name: "Laura R.",
        },
        {
            id: 4,
            review: "I hired Develobre to design my website and couldn't be happier with the results. The team was professional, responsive, and delivered a final product that exceeded my expectations. Thank you for making my vision come to life!",
            name: "Carlos M.",
        },
    ];

    return (
        <>
            {reviews.map((_, idx) => (
                <div key={idx} className="ReviewLetter">
                    <div className="cnt_revi">
                        <Description>{_.review}</Description>
                        <h2 className="re_name">{_.name}</h2>
                    </div>
                    <div className="shape"></div>
                </div>
            ))}
        </>
    );
};

export default ReviewLetter;
