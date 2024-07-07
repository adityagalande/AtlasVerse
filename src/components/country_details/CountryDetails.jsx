import React, { useCallback, useId, useState } from "react";
import { useParams, Link } from "react-router-dom"; 

import useSingleCountry from "../../custom_hooks/useSingleCountry";

function CountryDetails() {

    const {data} = useParams();
    const countryData = useSingleCountry(data);
    const uniqueKey = useId();

    return(
        <div className="flex justify-center items-center flex-wrap">
            {countryData.map((item) => (
                <div key={uniqueKey} className="flex flex-wrap justify-center items-center p-8 border">
                    <Link to={`/card`}>{item.name.common}</Link>
                    {/* <h1 to={`/card`}>{item.name.common}</h1> */}
                    <div><img src={item.flags.png} alt="Img" className="h-12 p-2" /></div>
                </div>
            ))}
        </div>
    );
}

export default CountryDetails;