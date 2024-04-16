import { NavLink } from "react-router-dom";
import React from "react";

// Interfaces
import { PropsChildren } from "../../../interfaces/interfaces.interface";

// Styles
import "./Footer.scss";

//Assets
import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Logo from "../../../assets/images/develobre_blanco.webp";

const Footer: React.FC<PropsChildren> = ({ className }) => {
    const network = [
        { id: 1, icon: Facebook, url: "https://www.facebook.com" },
        { id: 2, icon: Instagram, url: "https://www.instagram.com" },
        { id: 3, icon: Linkedin, url: "https://www.linkedin.com" },
    ];

    const information = [
        { id: 1, text: "FAQ", url: "/faq" },
        { id: 2, text: "Legal warning", url: "/legal-warning" },
        { id: 3, text: "Privacy policies", url: "/privacy-policies" },
    ];

    return (
        <footer className={`Footer ${className}`}>
            <div className="cnt_left">
                <h2 className="left_title">
                    Follow us on our social <br /> networks
                </h2>
                <div className="cnt_icon_network">
                    {network.map((_, idx) => (
                        <NavLink key={idx} to={_.url} target="_blank">
                            <img src={_.icon} alt="" className="icon_net" />
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="cnt_center">
                <h2 className="center_title">Help and information</h2>
                <div className="cnt_helps">
                    {information.map((_, idx) => (
                        <NavLink key={idx} to={_.url} className={"center_link"}>
                            {_.text}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="cnt_right">
                <NavLink to={"/"}>
                    <img src={Logo} alt="" className="_logo" />
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;
