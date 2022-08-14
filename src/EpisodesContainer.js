import React from "react";
import EpisodeCard from "./EpisodeCard";

function EpisodesContainer({ episodes }) {

    const episodeCards = episodes.map((episode) => (
        <EpisodeCard
            key={episode.id}
            episode={episode}
        />
    ))

    return(
        <div>
            <div id="episode-collection">{episodeCards}</div>
        </div>
    )
}

export default EpisodesContainer;