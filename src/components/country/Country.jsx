import React from "react";

// component
import Card from "../card/Card";

function Country() {
    return (
        <div className=" flex flex-row flex-wrap">
            <Card></Card>
            <Card></Card>
        </div>
    );
}

export default Country;