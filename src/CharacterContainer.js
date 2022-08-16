import React from "react";
import CharacterCard from "./CharacterCard";
import NewCharacterForm from "./NewCharacterForm";
import { Grid } from "@mui/material";



function CharacterContainer({ characters, handleAddNewCharacter, handleDeleteCharacter }) {

    console.log(typeof(characters))

    const characterCards = characters.map((character) => (
            <CharacterCard
                key={character.id}
                character={character}
                handleDeleteCharacter={handleDeleteCharacter}
            />
    ))

    return (
        <div id="character-collection" >
                <NewCharacterForm handleAddNewCharacter={handleAddNewCharacter}/>
                <br />
                <br />
                <Grid container rowSpacing={3} columnSpacing={{ xs:1, sm: 2, md: 3 }}>
                    {characterCards}
                </ Grid>
        </div>
    )
    
}

export default CharacterContainer;