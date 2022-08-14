import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterContainer({ characters }) {

    const characterCards = characters.map((character) => (
        <CharacterCard
            key={character.id}
            character={character}
        />
    ))

    return (
        <div id="character-collection">{characterCards}</div>
    )
    
}

export default CharacterContainer;