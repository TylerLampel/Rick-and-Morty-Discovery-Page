import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import './App.css';
import CharacterContainer from "./CharacterContainer";
import NavBar from "./NavBar";
import EpisodesContainer from "./EpisodesContainer";
import LocationsContainer from "./LocationsContainer";

function App() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);


    useEffect(() => {
      fetch("http://localhost:3000/characters/")
        .then((resp)=> resp.json())
        .then((characters) => setCharacters(characters))
    },[])

    useEffect(()=> {
      fetch("https://rickandmortyapi.com/api/location")
          .then(resp => resp.json())
          .then(locations => console.log(locations))
  },[])

  return (
    <div className="App">
        <header>
          <img src= "./rick-morty-collection-banner_1400x.webp" />
        </header>
        <NavBar />
        <Route exact path="/Characters">
          <CharacterContainer characters={characters} />
        </Route>
        <Route exact path="/Locations">
          <LocationsContainer locations={locations} />
        </Route>
        <Route exact path="/Episodes">
          <EpisodesContainer />
        </Route>
    </div>
  );
}

export default App;
