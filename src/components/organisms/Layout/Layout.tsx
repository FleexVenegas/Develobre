import React from "react";

import "./Layout.scss";
import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="Layout">
            <Header className="Header_" />
            <main className="View_">{children}</main>
            <Footer className="Footer_" />
        </div>
    );
};

export default Layout;
