import React, { useState } from 'react'

function FormInputTodo({ onSubmitForm }) {

  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      description: description
    }
    console.log(data);
    if (description) {
      onSubmitForm(data)
    }
    setDescription('')
  }


  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  )
}

export default FormInputTodo
