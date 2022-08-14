import React from "react";
import LocationCard from "./LocationCard";

function LocationsContainer({ locations }) {


    const locationCards = locations.map((location) => (
        <LocationCard
            key={location.id}
            location={location}
        />
    ))

    return (
        <div id="location-collection">{locationCards}</div>
    )
}

export default LocationsContainer;