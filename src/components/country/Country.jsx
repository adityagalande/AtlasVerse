import React, { useEffect, useId, useState } from "react";

// component
import Card from "../card/Card";
import useCountryInfo from "../../custom_hooks/useCountryInfo";

function Country() {

    const res = useCountryInfo();

    return (
        <div className="flex justify-center items-center flex-wrap">
            {res.map((item) => (
                <Card
                    countryName={item.name.common}
                    countryImg={item.flags.png}
                    countryPopulation={item.population}
                    countryRegion={item.region}
                    countryLanguage={item.name.common == "Antarctica" ? "NA" : Object.keys(item.languages).length > 1 ? Object.values(item.languages)[1] : Object.values(item.languages)[0]}
                    countryCurrency={item.region == "Antarctic" ? "NA" : (Object.values(item.currencies))[0].name ? (Object.values(item.currencies))[0].name : "NA"} />
            ))}
        </div>
    );
}

export default Country;