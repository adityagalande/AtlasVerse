import React from "react";
import { useState, useEffect } from "react";
import useCountryInfo from "../../custom_hooks/useCountryInfo";
import { Link } from "react-router-dom";

function Continent() {

    const res = useCountryInfo();

    res.map((item) => console.log(item.name.common))

    return (
        <div className="flex justify-center items-center flex-wrap"> 
            {res.map((item) => (
                <div className="flex flex-wrap justify-center items-center p-8 border">
                    <Link to={`/details/${item.name.official}`}>{item.name.common}</Link>
                    <div><img src={item.flags.png} alt="Img"  className="h-12 p-2"/></div>
                </div>
            ) )}
        </div>
    );
}

export default Continent;