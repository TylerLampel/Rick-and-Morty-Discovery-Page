import React from "react";

function LocationCard({ location, handleDeleteLocation }){

    const { id, image, name, type, dimension } = location

    return (
        <div>
            <br />
            <br />

            <img src= {image} alt={name} height="300px" width="300px"/>
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <p>Dimension: {dimension}</p>
                <br />
            <button onClick= {() => handleDeleteLocation(id)} className="del-btn">Delete Location</button>
        </div>
    )
}

export default LocationCard;