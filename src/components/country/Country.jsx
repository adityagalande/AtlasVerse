import React, { useId } from "react";

// component
import useCountryInfo from "../../custom_hooks/useCountryInfo";

function Country() {

    const continentData = useCountryInfo();
    const uniKey = useId()

    return (
        <div className=" flex flex-row flex-wrap">
            <div className="flex flex-wrap">{
                continentData.map((item) => (
                    <h1 key={item.name.common} >{item.continents == "North America" ? <div className="">
                        <div className="p-4">
                            <p>{item.name.common}</p>
                            <img src={item.flags.png} alt="" />
                        </div>
                    </div> : ""}</h1>
                ))
                }</div>
            
            {/* <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div> */}
        </div>
    );
}

export default Country;