import React from "react";

function LocationCard({ location }){


    return (
        <div>
            <h2>{location.name}</h2>
                <p>Type: {location.type}</p>
                <p>Dimension: {location.dimension}</p>
                <img src= {location.image} alt={location.name} height="300px" width="300px"/>
            
        </div>
    )
}

export default LocationCard;