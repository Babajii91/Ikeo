import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from './Menu';

const Layout = ({children}) => {
    return (
        <div>
        <Header />
        <Menu />
        <main style={{ minHeight: "80vh"}}>{children}</main>
        <Footer />
        </div>
    );
};

export default Layout;