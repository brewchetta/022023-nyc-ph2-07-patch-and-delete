import { useState } from 'react'

function RaccoonCard({ raccoon, patchRaccoon }) {

  const [newFavFood, setNewFavFood] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    // we need to create a newly edited raccoon object upon form submission
    const editedRaccoon = { ...raccoon, favFood: newFavFood }
    // and send that object up to our RaccoonsList
    patchRaccoon(editedRaccoon)

    // this just clears the state for the form
    setNewFavFood('')
  }

  const handleChange = (e) => setNewFavFood(e.target.value)

    return (
        <div className="border-black">
            <h2>Name: {raccoon.name}</h2>
            <p>Favorite Food: {raccoon.favFood}</p>

            {/* this is a simple form to update a favorite food */}
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} value={newFavFood} />
              <input type="submit" value={'Change Favorite Food'} />
            </form>
        </div>
    )
}

export default RaccoonCard
