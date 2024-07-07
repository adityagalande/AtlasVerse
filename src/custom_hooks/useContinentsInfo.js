import { Result } from "postcss";
import { useEffect, useState } from "react";


function useContinentsInfo(continent ="americas") {
    
    const [result, setResult] = useState([]);

    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/region/${continent}`)
        .then(data => data.json())
        .then((res) => setResult(res))
        .catch(e => {console.error(e)})
    }, [continent])

    return result;
}

export default useContinentsInfo;