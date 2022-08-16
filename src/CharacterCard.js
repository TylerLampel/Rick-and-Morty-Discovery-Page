import React from "react";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import {CardActions} from "@mui/material";
import {Grid} from "@mui/material";

function CharacterCard({ character, handleDeleteCharacter }){

    const { id, name, species, gender, status, image, } = character


    return (
            <Grid item xs={3} align= "center">  
                    <Card sx={{ maxWidth: 300, maxHeight: 800 }}>
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
                        <CardActions>
                            <Button onClick= {() => handleDeleteCharacter(id)} className="del-btn" size= "small">Delete Character</Button>
                        </CardActions>  
                    </Card>
            </Grid>
    )
}

export default CharacterCard;