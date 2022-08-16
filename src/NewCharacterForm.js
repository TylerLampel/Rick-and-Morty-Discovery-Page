import React, { useState } from "react";

const initialState = {
    name: "",
    species: "",
    gender: "",
    status: "",
    image: ""
};

function NewCharacterForm({handleAddNewCharacter}) {

    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    function handleSubmit(event){
        event.preventDefault();

        const newCharacter= {
            ...formData
        }
    

    fetch("http://localhost:3000/characters/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCharacter)
    })
    .then((resp)=> resp.json())
    .then((character) => handleAddNewCharacter(character))

    setFormData(initialState)

    }


    return (
        <div className="container">
      <form onSubmit={handleSubmit} className="add-character-form">
        <h3>Add A New Character</h3>
        <input
          value={formData.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a character's name..."
          className="input-text"
        />
        <br />
        <input
          value={formData.species}
          onChange={handleChange}
          type="text"
          name="species"
          placeholder="Enter a character's species"
          className="input-text"
        />
        <br />
        <input
          value={formData.gender}
          onChange={handleChange}
          type="text"
          name="gender"
          placeholder="Enter a character's gender"
          className="input-text"
        />
        <br />
        <input
          value={formData.status}
          onChange={handleChange}
          type="text"
          name="status"
          placeholder="Enter a character's status"
          className="input-text"
        />
        <br />
        <input
          value={formData.image}
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a character's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Character"
          className="submit"
        />
      </form>
    </div>
    )

    
}
export default NewCharacterForm;