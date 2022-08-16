import React from "react";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import {CardActions} from "@mui/material";
import { Grid } from "@mui/material";

function LocationCard({ location, handleDeleteLocation }){

    const { id, image, name, type, dimension } = location

    return (
        <div>
            <Grid item md={10} align="center">
                <Card sx={{ maxWidth: 300, maxHeight: 800 }}>
                    <CardMedia
                        component= "img"
                        image= {image} 
                        alt= {name} 
                        height="300"
                    />
                    <CardContent>
                        <h2>{name}</h2>
                        <p>Type: {type}</p>
                        <p>Dimension: {dimension}</p>
                    </CardContent>
                    <br />
                    <CardActions>
                        <Button onClick= {() => handleDeleteLocation(id)} className="del-btn" size="small">Delete Location</Button>
                    </CardActions>
                </ Card>
            </Grid>
        </div>
    )
}

export default LocationCard;