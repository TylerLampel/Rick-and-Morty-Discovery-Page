import React from "react";
import CharacterCard from "./CharacterCard";
import NewCharacterForm from "./NewCharacterForm";
import { Grid } from "@mui/material";



function CharacterContainer({ characters, handleAddNewCharacter, handleDeleteCharacter }) {
    

    const characterCards = characters.map((character) => (
            <CharacterCard
                key={character["id"]}
                character={character}
                handleDeleteCharacter={handleDeleteCharacter}
            />
    ))
    

    return (
        <div id="character-collection" >
            <NewCharacterForm handleAddNewCharacter={handleAddNewCharacter}/>
            <br />
            <br />
            <Grid 
                container
                alignItems="center"
                justifyContent="center"
                rowSpacing={3} 
                columnSpacing={{xs: 1 }}
            >
                {characterCards}
            </ Grid>
        </div>
    )
    
}

export default CharacterContainer;