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
                
                <div className="w-full h-full bg-yellow-50 justify-center items-center">
                    <div className="p-8 text-center font-bold text-4xl">
                        <h1>{item.name.common}</h1>
                    </div>

                    <div className="text-left font-semibold text-xl p-4" >
                        <h3>Names</h3>
                        <p>Common: {item.name.common}</p>
                        <p>Official: {item.name.official}</p>
                    </div>
                    <div className="text-left font-semibold text-xl p-4" >
                        <h3>Language</h3>
                        <p>Language: {item.name.common == "Antarctica" ? "NA" : Object.keys(item.languages).length > 1 ? Object.values(item.languages)[1] : Object.values(item.languages)[0]}</p>
                    </div>
                    <div className="text-left font-semibold text-xl p-4" >
                        <h3>Geography</h3>
                        <p>Region: {item.region}</p>
                        <p>Sub-Region: {item.subregion}</p>
                    </div>
                    <div className="text-left font-semibold text-xl p-4" >
                        <h3>Codes</h3>
                        <p>ISO 3166-1 alpha-2: {item.cca2}</p>
                        <p>ISO 3166-1 alpha-3: {item.cca3}</p>
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