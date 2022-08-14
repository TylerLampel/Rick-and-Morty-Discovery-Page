import React from "react";
import LocationCard from "./LocationCard";
import NewLocationForm from "./NewLocationForm";

function LocationsContainer({ locations, handleAddNewLocation, handleDeleteLocation }) {


    const locationCards = locations.map((location) => (
        <LocationCard
            key={location.id}
            location={location}
        />
    ))

    return (
        <div id="location-collection">
            <NewLocationForm />
            {locationCards}
            </div>
    )
}

export default LocationsContainer;