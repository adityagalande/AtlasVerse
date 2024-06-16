import React from "react";
import { useState, useEffect } from "react";
import useCountryInfo from "../../custom_hooks/useCountryInfo";

function Continent() {

    const res = useCountryInfo();

    console.log(res);


    return (
        <>
        Continent
            {/* {res} */}
        </>
    );
}

export default Continent;