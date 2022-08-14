import React from "react";

function LocationCard({ location }){

    const {name } = location


    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

export default LocationCard;