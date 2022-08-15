import React from "react";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";

function CharacterCard({ character, handleDeleteCharacter }){

    const { id, name, species, gender, status, image, } = character


    return (
        <Card sx={{ maxWidth: 500, maxHeight: 500 }}>
            <CardMedia
                component="img"
                image={image}
                height="300"
                alt={name}
            />
            <CardContent>
            <h2>{name}</h2>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Status: {status}</p>
            </ CardContent>

            <Button onClick= {() => handleDeleteCharacter(id)} className="del-btn">Delete Character</Button>
        </Card>
    )
}

export default CharacterCard;