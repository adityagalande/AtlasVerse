import React from "react";


function Card({ countryName, countryImg, countryPopulation, countryCurrency, countryLanguage, countryRegion }) {


    return(
        <>
        {/* <div className="flex justify-evenly flex-wrap bg-green-300"> */}
            <div className="flex flex-col w-60 h-80 shadow-md m-6 pb-4 rounded-md bg-white hover:bg-slate-100">
                <img className="rounded-t-md w-60 h-[40%] shadow-md"  src={countryImg} alt="" />
            <div className="py-2 px-3 ">
                    <div className="flex-col py-4 text-left px-2">
                        <h1 className="font-bold">{countryName}</h1>
                        <p className="">{countryRegion}</p>
                    </div>
                    <div className="px-2 font-semibold">👫🏻 {countryPopulation >= 1000000000 ? (countryPopulation / 1000000000).toFixed(1) + 'B' : (countryPopulation / 1000000).toFixed(1) + 'M'} people</div>
                    {/* <div className="px-2 font-semibold">🗣️ {Object.keys(countryLanguage).length == 1 ? Object.values(countryLanguage)[0] : Object.values(countryLanguage)[1] }</div> */}
                    <div className="px-2 font-semibold">🗣️ {countryLanguage}</div>
                    <div className="px-2 rounded-b-md font-semibold">💰 {countryCurrency}</div>
                    {/* <div className="px-2 rounded-b-md font-semibold">💰 {(Object.values(countryCurrency))[0].name ? (Object.values(countryCurrency))[0].name : "NA"}</div> */}
            </div>
        </div>
        </>
    );
}

export default Card;