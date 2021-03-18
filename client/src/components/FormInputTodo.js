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
      <form action="" onSubmit={handleSubmit} className="mb-6 text-center">
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded py-2 px-4 mr-3 w-7/12 shadow-xl"
        />
        <button className="border rounded py-2 px-4 bg-green-400 text-white shadow-xl">Add</button>
      </form>
    </>
  )
}

export default FormInputTodo
