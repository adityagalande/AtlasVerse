import React from "react";
import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";

import useSingleCountry from "../../custom_hooks/useSingleCountry";

function CountryDetails() {

    const {data} = useParams();
    const countryData = useSingleCountry(data);

    

    return(
        <div>
            <img src={countryData} alt="" />
        </div>
    );
}

export default CountryDetails;