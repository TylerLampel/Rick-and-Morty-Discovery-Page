import React from "react";

function EpisodeCard({ episode }){


    return (
        <div>
            <br/>
            <br />
            
            <img src={episode.image} height= "300px" width= "300px"/>
            <h2>{episode.episode}</h2>
            <p>{episode.name}</p>
            
        </div>
    )
}

export default EpisodeCard;