import React from "react";


function Card({countryName, countryImg, countryPopulation, countryCurrency}) {


    return(
        <>
        {/* <div className="flex justify-evenly flex-wrap bg-green-300"> */}
            <div className="flex flex-col w-60 h-80 shadow-md m-6  rounded-md bg-white hover:bg-slate-100">
                <img className="rounded-t-md w-60 h-[40%] shadow-md"  src={countryImg} alt="" />
            <div className="pb-4">
                    <div className="flex-col py-4 text-left px-2">
                        <h1 className="font-bold">{countryName}</h1>
                        <p className="">Americas</p>
                    </div>
                    <div className="px-2 font-semibold">👫🏻 {countryPopulation} people</div>
                    <div className="px-2 font-semibold">🗣️ English</div>
                    <div className="px-2 rounded-b-md font-semibold">💰 {countryCurrency}</div>
            </div>
        </div>
        </>
    );
}

export default Card;