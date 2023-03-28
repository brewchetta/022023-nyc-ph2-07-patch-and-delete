import React, { useState, useEffect } from 'react'
import RaccoonCard from './RaccoonCard'
import RaccoonForm from "./RaccoonForm"

function RaccoonsList() {

  // STATE //

  const [raccoonsArr, setRaccoonsArr] = useState( [] )

  // EFFECTS //

  useEffect(() => {
    fetch('http://localhost:3002/raccoons')
    .then( res => res.json() )
    .then( data => setRaccoonsArr(data) )
  }, [])

  // CALLBACK FUNCTIONS //

  function addRaccoon( newRaccoonObject ) {
    fetch('http://localhost:3002/raccoons', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(newRaccoonObject)
    })
    .then( res => res.json() )
    .then( newRaccoonFromDB => setRaccoonsArr( [ ...raccoonsArr, newRaccoonFromDB ] ) )
  }

  // this is our brand new function
  function patchRaccoon( editedRaccoon ) {
    // technically we're doing this pessimistically
    // we send the patch request to the edited raccoon's id
    fetch(`http://localhost:3002/raccoons/${editedRaccoon.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      // we send the newly edited raccoon object
      body: JSON.stringify(editedRaccoon)
    })
    .then(res => res.json())
    .then(newRaccoon => {
      // when it returns we get the new raccoon and run a .map
      const editedRaccoonsArray = raccoonsArr.map( raccoon => raccoon.id === editedRaccoon.id ? editedRaccoon : raccoon )
      // if the raccoon has the id to patch over, we put in the editedRaccoon
      // otherwise we keep the old raccoon

      // and finally we plug in the newly edited array to replace the old one
      setRaccoonsArr( editedRaccoonsArray )
    })
  }

  // RENDERS//

  const mappedRaccoons = raccoonsArr.map( raccoon => <RaccoonCard key={raccoon.id} raccoon={raccoon} patchRaccoon={patchRaccoon} /> )

  return (
    <div className="raccoons-list border-black">

      <h2>🦝 Raccoons 🦝</h2>

      <RaccoonForm addRaccoon={addRaccoon} />

      <div className="flex">

        { mappedRaccoons }

      </div>

    </div>
  )
}

export default RaccoonsList
