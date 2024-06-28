import { useEffect, useState } from "react";

function useSingleCountry(country = "france republic") {

    const [res, setRes] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then((res) => (res.json()))
            .then((data) => (setRes(data)))
        .catch((e) => console.error(e))
    }, [])

    console.log(res);

    return res;
}

export default useSingleCountry;