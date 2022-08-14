import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import './App.css';
import CharacterContainer from "./CharacterContainer";
import NavBar from "./NavBar";
import EpisodesContainer from "./EpisodesContainer";
import LocationsContainer from "./LocationsContainer";
import Header from "./Header";

function App() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);


  useEffect(()=> {
      fetch("http://localhost:3000/characters/")
        .then((resp)=> resp.json())
        .then((characters) => setCharacters(characters))
      },[])

      useEffect(()=> {
      fetch("http://localhost:3000/locations/")
          .then(resp => resp.json())
          .then(locations => setLocations(locations))
      },[])

      useEffect(()=> {
        fetch("http://localhost:3000/episodes/")
            .then(resp => resp.json())
            .then(episodes => setEpisodes(episodes))
        },[])

      function handleAddNewCharacter(character){
        setCharacters({character, ...characters})
      }

      function handleRemoveCharacter(id) {
        const updatedCharacters = characters.filter(character => character.id !== id)
        setCharacters(updatedCharacters)
      }

      function handleDeleteCharacter(id) {
        fetch(`http://localhost:3000/characters/${id}`, {
          method: "DELETE",
      }).then((resp)=> {
        if(resp.status === 200) {
          handleRemoveCharacter(id)
        }
      })
      }

      function handleAddNewLocation(location){
        setLocations({location, ...locations})
      }

      function handleRemoveLocation(id) {
        const updatedLocations = locations.filter(location => location.id !== id)
        setLocations(updatedLocations)
      }

      function handleDeleteLocation(id) {
        fetch(`http://localhost:3000/locations/${id}`, {
          method: "DELETE",
      }).then((resp)=> {
        if(resp.status === 200) {
          handleRemoveLocation(id)
        }
      })
      }

  return (
    <div className="App">
        <Header />
        <NavBar />
        <Route exact path="/Characters">
          <CharacterContainer 
          handleAddNewCharacter={handleAddNewCharacter} 
          characters={characters} 
          handleDeleteCharacter={handleDeleteCharacter} 
          />
        </Route>
        <Route exact path="/Episodes">
          <EpisodesContainer 
          episodes={episodes} 
          />
        </Route>
        <Route exact path="/Locations">
          <LocationsContainer 
          locations={locations}
          handleAddNewLocation={handleAddNewLocation} 
          handleDeleteLocation={handleDeleteLocation}
          />
        </Route>
        
    </div>
  );
}

export default App;
