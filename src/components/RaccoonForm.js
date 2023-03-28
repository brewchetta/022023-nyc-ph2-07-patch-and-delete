import React, { useState } from 'react'

function RaccoonForm({ addRaccoon }) {

  const [formData, setFormData] = useState( { name: '', favFood: '' } )

  const handleChange = (e) => setFormData( { ...formData, [e.target.name]: e.target.value } )

  function handleSubmit(e) {
    e.preventDefault()
    addRaccoon( formData )
  }

  return (

    <form onSubmit={ handleSubmit }>

      <label>Name:</label>
      <input type="text" onChange={handleChange} value={formData.name} name="name" />

      <label>Favorite Food:</label>
      <input type="text" onChange={handleChange} value={formData.favFood} name="favFood" />

      <input type="submit" value={'Add New Raccoon'} />

    </form>

  )
}

export default RaccoonForm
