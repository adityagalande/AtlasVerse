import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header className="sticky top-0 shadow bg-white">
            <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                <NavLink to="" className={"flex justify-center items-center"}>
                    <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="" className="h-12 mr-3" />
                </NavLink>

                <div className="flex flex-wrap gap-x-4 justify-center items-center font-semibold">
                    <NavLink to={"country"} >Country</NavLink>
                    <NavLink to={"continent"} >Continent</NavLink>
                    <NavLink to={""} className={"bg-red-500 hover:bg-red-600 rounded-lg p-2 text-white"} >Home</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;