import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import './App.css';
import CharacterContainer from "./CharacterContainer";
import NavBar from "./NavBar";
import EpisodesContainer from "./EpisodesContainer";
import LocationsContainer from "./LocationsContainer";

function App() {
  const [characters, setCharacters] = useState([]);


    useEffect(() => {
      fetch("http://localhost:3000/characters/")
        .then((resp)=> resp.json())
        .then((characters) => setCharacters(characters))
    },[])

  return (
    <div className="App">
      <Route path="/">
        <header>
          <img src= "./rick-morty-collection-banner_1400x.webp" />
        </header>
        <NavBar />
      </Route>
      <Route path="/Characters">
        <CharacterContainer characters={characters} />
      </Route>
      <Route path="/Locations">
        <LocationsContainer />
      </Route>
      <Route path="/Episodes">
        <EpisodesContainer />
      </Route>
    </div>
  );
}

export default App;
