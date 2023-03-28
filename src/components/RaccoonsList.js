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

  // RENDERS//

  const mappedRaccoons = raccoonsArr.map( raccoon => <RaccoonCard key={raccoon.id} raccoon={raccoon} /> )

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
