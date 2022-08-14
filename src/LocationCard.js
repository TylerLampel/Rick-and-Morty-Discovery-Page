import React from "react";

function LocationCard({ location, handleDeleteLocation }){


    return (
        <div>
            <br />
            <br />
            
            <img src= {location.image} alt={location.name} height="300px" width="300px"/>
            <h2>{location.name}</h2>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
                <br />
            <button onClick= {() => handleDeleteLocation(location.id)} className="del-btn">Delete Location</button>
        </div>
    )
}

export default LocationCard;