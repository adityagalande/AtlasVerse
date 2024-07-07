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
                // <div key={uniqueKey} className="flex flex-wrap justify-center items-center p-8 border">
                //     <Link to={`/card`}>{item.name.common}</Link>
                //     {/* <h1 to={`/card`}>{item.name.common}</h1> */}
                //     <div><img src={item.flags.png} alt="Img" className="h-12 p-2" /></div>
                // </div>
                
                <div className="w-full h-full bg-orange-200 justify-center items-center">
                    <div className="p-8 text-center font-bold text-4xl">
                        <h1>{item.name.common}</h1>
                    </div>

                    <div className="text-left font-semibold text-xl p-4" >
                        <h3>Names</h3>
                    </div>
                    <div className="text-left font-semibold text-xl p-4" >
                        <h3>Language</h3>
                    </div>
                    <div className="text-left font-semibold text-xl p-4" >
                        <h3>Geography</h3>
                    </div>
                    <div className="text-left font-semibold text-xl p-4" >
                        <h3>Codes</h3>
                    </div>

                    <div className="p-8">
                        <img className="mx-auto rounded" src={item.flags.png} alt="Nishahaha" />
                    </div>

                </div>

            ))}
        </div>

/*
        <div>
            {countryData.map((item) => {
            <div className="w-full h-full bg-orange-200 justify-center items-center">
                <div className="p-8 text-center font-bold text-4xl">
                    <h1>Country Name: {item.name.common}</h1>
                </div>

                <div className="text-left font-semibold text-xl p-4" >
                    <h3>Names</h3>
                </div>
                <div className="text-left font-semibold text-xl p-4" >
                    <h3>Language</h3>
                </div>
                <div className="text-left font-semibold text-xl p-4" >
                    <h3>Geography</h3>
                </div>
                <div className="text-left font-semibold text-xl p-4" >
                    <h3>Codes</h3>
                </div>

                <div className="p-8">
                    <img className="mx-auto rounded" src="https://flagcdn.com/w320/is.png" alt="Nishahaha" />
                </div>

            </div>}
        </div>
        }) */

    );
}

export default CountryDetails;