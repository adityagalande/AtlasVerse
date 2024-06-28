import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
    return(
        <>
            home
            <NavLink to={"details"} >Details</NavLink>
        </>
    );
}

export default Home;