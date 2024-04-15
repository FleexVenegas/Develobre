import React from "react";
import { NavLink } from "react-router-dom";

//Interfaces
import { PropsChildren } from "../../../interfaces/interfaces.interface";

//Styles
import "./Header.scss";

//Assets
import Logo from "../../../assets/images/develobre_blanco.webp";

const Header: React.FC<PropsChildren> = ({ className }) => {
    const optionLink = [
        { id: 1, text: "Home", link: "#" },
        { id: 2, text: "Contact", link: "#" },
    ];
    return (
        <header className={`Header ${className}`}>
            <div className="cnt_logo">
                <img src={Logo} alt="" className="logo" />
            </div>
            <nav className="cnt_nav">
                {optionLink.map((_, idx) => (
                    <NavLink key={idx} to={_.link} className={"link"}>
                        {_.text}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default Header;
