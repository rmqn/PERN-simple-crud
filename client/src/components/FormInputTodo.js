import React, { useState } from 'react'
import Check from './svg/Check';

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
      <form action="" onSubmit={handleSubmit} className="formTodo">
        {/* <div className="icon"></div> */}
        <Check/>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
    </>
  )
}

export default FormInputTodo
