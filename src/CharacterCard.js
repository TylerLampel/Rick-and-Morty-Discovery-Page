import React from "react";

function CharacterCard({characters}){

    const [name, image] = characters

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