import React, { useState } from 'react'
import ComicCard from "./ComicCard"
import ComicForm from "./ComicForm"

// to use the server do 'npm run server'
// server is running on 'http://localhost:3002'

function ComicsList() {

  return (
    <div className="comics-list border-black">

      <h2>🦸 Comics 🦸</h2>

      <div className="flex">

        <ComicCard /> {/* <---  Delete this comic card */}

        {/* comics go here */}
        {/* you'll need to fetch and map through the comics to show them */}

      </div>

      {/* once you've shown all the comics, set up the form below to add a new comic */}
      <ComicForm />

      {/* as a bonus once you're done... */}
      {/* can you add a delete button to comic card to remove it from the comics array? */}

    </div>
  )
}

export default ComicsList
