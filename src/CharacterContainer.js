import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import NewCharacterForm from "./NewCharacterForm";
import { Grid } from "@mui/material";

function CharacterContainer({
  searchBy,
  setSearchBy,
  setFilter,
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

  function handleClick(e) {
    setFilter(e.target.value);
  }

  function handleChange(e) {
    setSearchBy(e.target.value);
  }

  return (
    <div id="character-collection">
      <input
        placeholder="search"
        value={searchBy}
        onChange={handleChange}
      ></input>
      <NewCharacterForm handleAddNewCharacter={handleAddNewCharacter} />
      <br />
      <button onClick={handleClick} value="Male">
        Male
      </button>
      <button onClick={handleClick} value="Female">
        Female
      </button>
      <button onClick={handleClick} value="All">
        All
      </button>
      <br />
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
