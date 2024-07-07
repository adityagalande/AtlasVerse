import React, { useEffect, useState } from "react";
import useCountryInfo from "../../custom_hooks/useCountryInfo";
import { Link } from "react-router-dom";
import useContinentsInfo from "../../custom_hooks/useContinentsInfo";
import Card from "../card/Card";

function Continent() {

    // const res = useCountryInfo();
    const [continent, setContinent] = useState();
    // const [res, setRes] = useState([]);
    const res = useContinentsInfo(continent);
    


    return (

        <>

            <div className="flex flex-flex-wrap justify-around my-4">
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("asia")}} >Asia</button>
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("europe")}} >Europe</button>
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("africa")}} >Africa</button>
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("oceania")}} >Austrelia</button>
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("americas")}} >Americas</button>
                {/* <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("south america")}} >South America</button> */}
                <button className="md:py-4 rounded shadow-md md:px-12 font-semibold text-xl bg-white hover:bg-orange-500 hover:text-white" onClick={() => {setContinent("antarctic")}} >Antarctica</button>
            </div>

            {/* <div className="flex justify-center items-center flex-wrap bg-pink-400">
                {res.map((item) => (
                    <div key={item.name.common} className="flex flex-wrap justify-center items-center p-8 border">
                        <Link to={`/details/${item.name.official}`}>{item.name.common}</Link>
                        <div><img src={item.flags.png} alt="Img" className="h-12 p-2" /></div>
                    </div>
                ))}
            </div> */}

            <div className="flex justify-center items-center flex-wrap">
                {res.map((item) => (
                    <Card countryName={item.name.common} countryImg={item.flags.png} countryPopulation={item.population} countryCurrency={"item.currencies.XOF.name"} />
                ))}
            </div>
        </>
    );
}

export default Continent;