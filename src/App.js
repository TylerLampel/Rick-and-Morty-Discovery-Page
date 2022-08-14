import React, { useEffect, useState } from "react";
import './App.css';
import CharacterCard from "./CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);


    fetch("http://localhost:3000/characters/")
    .then((resp)=> resp.json())
    .then((characters) => console.log(characters, "characters"))

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
      <CharacterCard characters={characters}/>
      </div>
    </div>
  );
}

export default App;
