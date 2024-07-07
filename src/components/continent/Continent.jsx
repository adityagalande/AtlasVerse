import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useContinentsInfo from "../../custom_hooks/useContinentsInfo";
import Card from "../card/Card";

function Continent() {

    const [continent, setContinent] = useState();
    const res = useContinentsInfo(continent);
    


    return (

        <>

            <div className="flex flex-flex-wrap justify-around my-4">
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("asia")}} >Asia</button>
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("europe")}} >Europe</button>
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("africa")}} >Africa</button>
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("oceania")}} >Austrelia</button>
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("americas")}} >Americas</button>
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("antarctic")}} >Antarctica</button>
            </div>

            <div className="flex justify-center items-center flex-wrap">
                {res.map((item) => (
                    <NavLink to={`/details/${item.name.official}`}>
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
        </>
    );
}

export default Continent;