import React, { useEffect, useId, useState } from "react";
import { NavLink } from "react-router-dom";

// component
import Card from "../card/Card";
import useCountryInfo from "../../custom_hooks/useCountryInfo";

function Country() {

    const res = useCountryInfo();

    return (
        <div className="flex justify-center items-center flex-wrap">
            {res.map((item) => (
                <NavLink to={`/details/${item.name.official}`} >
                    <Card
                        countryName={item.name.common}
                        countryImg={item.flags.png}
                        countryPopulation={item.population}
                        countryRegion={item.region}
                        countryLanguage={item.name.common == "Antarctica" ? "NA" : Object.keys(item.languages).length > 1 ? Object.values(item.languages)[1] : Object.values(item.languages)[0]}
                        countryCurrency={item.region == "Antarctic" ? "NA" : (Object.values(item.currencies))[0].name ? (Object.values(item.currencies))[0].name : "NA"} />
                </NavLink>
            ))}
        </div>
    );
}

export default Country;