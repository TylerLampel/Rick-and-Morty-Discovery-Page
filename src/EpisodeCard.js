import React from "react";

function EpisodeCard({ episode }){


    return (
        <div>
            <h2>{episode.episode}</h2>
            <p>{episode.name}</p>
            <img src={episode.image} height= "300px" width= "300px"/>
        </div>
    )
}

export default EpisodeCard;