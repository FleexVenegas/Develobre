import Description from "../../components/atoms/Description/Description";
import Mark from "../../components/atoms/Mark/Mark";
import Container from "../../components/molecules/Container/Container";
import "./Learn.scss";

const Learn = () => {
    return (
        <Container className="Learn">
            <div className="cnt_img">
                <h1 className="title_lear">
                    Take your business <br /> to the next level with a <br /> high-impact
                    website!
                </h1>
            </div>
            <div className="cnt_info_learn">
                <Description>
                    In today's digital age, having a strong online presence is
                    essential to the success of any business. One of the most
                    powerful tools to achieve this is a functional and
                    well-designed website. Whether you're starting from scratch
                    or looking to improve your existing online presence,
                    creating a quality website can make the difference between
                    success and stagnation in the competitive world of
                    e-commerce.
                </Description>
                <h2 className="sub_title">
                    Why is a quality website important?
                </h2>
                <Description>
                    1. 24/7 Accessibility: A website allows your customers to
                    access information about your business and products at any
                    time and from anywhere. This increases convenience for your
                    customers and expands your reach beyond geographic
                    limitations.
                </Description>
                <Description>
                    2. Credibility and professionalism: A well-designed and
                    well-maintained website creates a positive impression on
                    potential clients. Demonstrate that your business is
                    legitimate, trustworthy, and committed to quality.
                </Description>
                <Description>
                    3. Effective Marketing and Promotion: A website offers you a
                    platform to promote your products or services effectively.
                    You can use digital marketing strategies, such as SEO
                    (Search Engine Optimization), social networks and quality
                    content to attract and retain customers.
                </Description>
                <Description>
                    4. Advanced Features: Incorporate advanced features into
                    your website to improve user experience and facilitate
                    conversions. This can include features such as advanced
                    search options, product filtering systems, social media
                    integration, live chat, and secure payment options.
                </Description>
                <Description>
                    5. Search Engine Optimization (SEO): Make sure your website
                    is optimized for search engines, which will make it easier
                    for potential customers to find you online. This includes
                    keyword optimization, creating high-quality content, and
                    improving site loading speed.
                </Description>
                <Mark className="lear_mark"/>
            </div>
        </Container>
    );
};

export default Learn;
