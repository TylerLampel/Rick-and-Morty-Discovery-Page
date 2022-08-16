import React from "react";
import EpisodeCard from "./EpisodeCard";
import { Grid } from "@mui/material";

function EpisodesContainer({ episodes }) {

    const episodeCards = episodes.map((episode) => (
        <EpisodeCard
            key={episode.id}
            episode={episode}
        />
    ))

    return(
        <div id="episode-collection">
            <Grid 
                container 
                alignItems="center"
                justifyContent="center"
                rowSpacing={3} 
                columnSpacing={{ xs:1, sm: 2, md: 3 }}
            >
                {episodeCards}
            </ Grid>   
        </div>
    )
}

export default EpisodesContainer;