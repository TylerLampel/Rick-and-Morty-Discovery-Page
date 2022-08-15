import React from "react";
import CharacterCard from "./CharacterCard";
import NewCharacterForm from "./NewCharacterForm";

function CharacterContainer({ characters, handleAddNewCharacter, handleDeleteCharacter }) {

    const characterCards = characters.map((character) => (
            <CharacterCard
                key={character.id}
                character={character}
                handleDeleteCharacter={handleDeleteCharacter}
            />
    ))

    return (
        <div id="character-collection">
                <NewCharacterForm handleAddNewCharacter={handleAddNewCharacter}/>
            {characterCards}
        </div>
    )
    
}

export default CharacterContainer;