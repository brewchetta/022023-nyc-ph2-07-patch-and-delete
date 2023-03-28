import { useState } from 'react'

function RaccoonCard({ raccoon, patchRaccoon }) {

  const [newFavFood, setNewFavFood] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const editedRaccoon = { ...raccoon, favFood: newFavFood }

    patchRaccoon(editedRaccoon)

    setNewFavFood('')
  }

  const handleChange = (e) => setNewFavFood(e.target.value)

    return (
        <div className="border-black">
            <h2>Name: {raccoon.name}</h2>
            <p>Favorite Food: {raccoon.favFood}</p>

            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} value={newFavFood} />
              <input type="submit" value={'Change Favorite Food'} />
            </form>
        </div>
    )
}

export default RaccoonCard
