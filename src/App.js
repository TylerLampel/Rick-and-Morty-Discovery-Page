import React, { useEffect } from "react";
import './App.css';
import './CharacterCard';

function App() {

  useEffect(()=> {
    fetch("https://rickandmortyapi.com/api/character")
    .then((resp) => resp.json())
    .then((data) => (console.log(data)))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <CharacterCard/>
      </header>
    </div>
  );
}

export default App;
