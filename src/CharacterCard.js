import React from "react";

function CharacterCard({ character }){

    const { id, name, species, gender, status, image, origin, episode } = character


    return (
        <div>
            <h2>{name}</h2>
                <img
                src={image}
                alt={name}
                className="character-avatar"
                />
        </div>
    )
}

export default CharacterCard;