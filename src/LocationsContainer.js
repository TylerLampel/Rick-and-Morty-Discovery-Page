import React from "react";
import {useEffect, useState} from "react";
import LocationCard from "./LocationCard";

function LocationsContainer() {

    const [locations, setLocations] = useState([])

    useEffect(()=> {
        fetch("https://rickandmortyapi.com/api/location")
            .then(resp => resp.json())
            .then(locations => console.log(locations))
    },[])


    return (
        <LocationCard locations= {locations} />
    )
}

export default LocationsContainer;