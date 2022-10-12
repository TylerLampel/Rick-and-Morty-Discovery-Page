import React from "react";
import CharacterCard from "./CharacterCard";
import NewCharacterForm from "./NewCharacterForm";
import { Grid } from "@mui/material";

// two buttons, male and female. when clicked show  only that gender

// add two buttons
// filter characters array in app pass down filteredCharacters
// filter characters to only show male/female

function CharacterContainer({
  characters,
  handleAddNewCharacter,
  handleDeleteCharacter,
}) {
  const characterCards = characters.map((character) => (
    <CharacterCard
      key={character.id}
      character={character}
      handleDeleteCharacter={handleDeleteCharacter}
    />
  ));

  function handleClick() {}

  return (
    <div id="character-collection">
      <NewCharacterForm handleAddNewCharacter={handleAddNewCharacter} />
      <br />
      <button onClick={handleClick}>Male</button>
      <button onClick={handleClick}>Female</button>
      <br />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        rowSpacing={3}
        columnSpacing={{ xs: 1 }}
      >
        {characterCards}
      </Grid>
    </div>
  );
}

export default CharacterContainer;
