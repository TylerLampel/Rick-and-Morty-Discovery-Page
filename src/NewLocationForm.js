import React, { useState } from "react";

const initialState = {
    name: "",
    image: "",
    type: "",
    dimension: "",
  };

function NewLocationForm({handleAddNewLocation}) {

    const [formData, setFormData] = useState(initialState)

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    
    function handleSubmit(event){
        event.preventDefault();

        const newLocation= {
            ...formData
        }
    

    fetch("http://localhost:3000/locations/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLocation)
    })
    .then((resp)=> resp.json())
    .then((location) => handleAddNewLocation(location))

    setFormData(initialState)

    }


    return (
        <div className="container">
        <form onSubmit={handleSubmit} className="add-Location-form">
          <h3>Add A New Location</h3>
            <input
              value={formData.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter a Location's name..."
              className="input-text"
            />
            <br />
            <input
              value={formData.image}
              onChange={handleChange}
              type="text"
              name="image"
              placeholder="Enter a Location's image URL..."
              className="input-text"
            />
            <br />
            <input
              value={formData.type}
              onChange={handleChange}
              type="text"
              name="type"
              placeholder="Enter a Location's type"
              className="input-text"
            />
            <br />
            <input
              value={formData.dimension}
              onChange={handleChange}
              type="text"
              name="dimension"
              placeholder="Enter a Location's dimension"
              className="input-text"
            />
            <br />
            <input
              type="submit"
              name="submit"
              value="Create New Location"
              className="submit"
            />
        </form>
    </div>
    )

    
}
export default NewLocationForm;