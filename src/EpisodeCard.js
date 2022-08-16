import React from "react";
import { Card } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import {Grid} from "@mui/material";

function EpisodeCard({ episode }){


    return (
        <div>
            <br />
            <br />
            <Grid item xs={10}>
                <Card sx={{ maxWidth: 350, maxHeight: 800 }}>
                    <CardMedia 
                        component= "img" 
                        image={episode.image} 
                        height= "250px"
                        alt={episode.name}
                    />
                    <CardContent>
                        <h2>{episode.episode}</h2>
                        <p>{episode.name}</p>
                    </CardContent>
                </Card>
            </ Grid>
        </div>
    )
}

export default EpisodeCard;