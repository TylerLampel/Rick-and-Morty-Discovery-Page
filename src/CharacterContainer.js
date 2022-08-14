import React from "react";
import CharacterCard from "./CharacterCard";
import NewCharacterForm from "./NewCharacterForm";

function CharacterContainer({ characters }) {

    const characterCards = characters.map((character) => (
        <CharacterCard
            key={character.id}
            character={character}
        />
    ))

    return (
        <div id="character-collection">
            <NewCharacterForm />
            {characterCards}
        </div>
    )
    
}

export default CharacterContainer;