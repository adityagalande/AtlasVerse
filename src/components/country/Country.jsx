import React, { useEffect, useId, useState } from "react";

// component
import useCountryInfo from "../../custom_hooks/useCountryInfo";

function Country() {

    const [items, setItems] = useState([]);
    const continentData = useCountryInfo();
    /*
    function getNorthAmerica(){
        const res = continentData.filter((item) => item.continents.includes("North America"))
        setItems(res);
        console.log(items[0])
    }*/

    return (
        <div className=" flex flex-row flex-wrap"> hahaha </div>
        //<button onClick={getNorthAmerica} className="bg-red-200 p-2" > North America</button>
    );
}

export default Country;