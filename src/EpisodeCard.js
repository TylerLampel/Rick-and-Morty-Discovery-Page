import React from "react";

function EpisodeCard({ episode }){


    return (
        <div>
            <h2>{episode.episode}</h2>
            <p>{episode.name}</p>
        </div>
    )
}

export default EpisodeCard;