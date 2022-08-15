import React from "react";
import LocationCard from "./LocationCard";
import NewLocationForm from "./NewLocationForm";

function LocationsContainer({ locations, handleAddNewLocation, handleDeleteLocation }) {

    const locationCards = locations.map((location) => (
        <LocationCard
            key={location.id}
            location={location}
            handleDeleteLocation={handleDeleteLocation}
        />
    ))

    return (
        <div id="location-collection">
            <NewLocationForm handleAddNewLocation={handleAddNewLocation}/>
            {locationCards}
            </div>
    )
}

export default LocationsContainer;