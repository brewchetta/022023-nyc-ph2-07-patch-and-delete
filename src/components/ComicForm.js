import React, { useState } from 'react'

function ComicForm(props) {

  // STATE
  const [name, setName] = useState('')
  const [issue, setIssue] = useState('')
  const [image_url, setImageURL] = useState('')

  // EVENT HANDLERS
  const handleChangeName = (e) => console.log('something happens here')
  const handleChangeIssue = (e) => console.log('something happens here')
  const handleChangeImage = (e) => console.log('something happens here')

  function handleSubmit() {
    console.log('something happens here')
  }

  return (

    <form className={"comic-form"} onSubmit={ handleSubmit }>
      <label>Name:</label>
      <input type="text" onChange={handleChangeName} value={name} />
      <label>Issue Number:</label>
      <input type="text" onChange={handleChangeIssue} value={issue} />
      <label>Image URL:</label>
      <input type="text" onChange={handleChangeImage} value={image_url} />
      <input type="submit" value={'Add New Raccoon'} />
    </form>

  )
}

export default ComicForm
