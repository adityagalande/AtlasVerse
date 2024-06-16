import React from "react";
import { Outlet } from "react-router-dom";

// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function Root(){
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;