import { useState, useEffect } from "react";

function useCountryInfo() {

    let [res, setRes] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => (res.json()))
            .then((data) => (setRes(data)))
            .catch((e) => { console.error(e) })
    }, []);

    return res;

}

export default useCountryInfo;