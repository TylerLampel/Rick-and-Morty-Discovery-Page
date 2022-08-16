import React from "react";
import LocationCard from "./LocationCard";
import NewLocationForm from "./NewLocationForm";
import { Grid } from "@mui/material";

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
            <br />
            <br />
            <Grid container rowSpacing={1} columnSpacing={{ xs:1, sm: 2, md: 3 }}>
                {locationCards}
            </ Grid>
            
            </div>
    )
}

export default LocationsContainer;