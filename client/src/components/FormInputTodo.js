import React, { useState } from 'react'
import Check from './svg/Check';

function FormInputTodo({ onSubmitForm }) {

  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      description: description,
      is_done: status
    }
    console.log(data);
    if (description) {
      onSubmitForm(data)
    }
    setDescription('')
    setStatus(false)
  }


  return (
    <>
      <form action="" onSubmit={handleSubmit} className="formTodo">
        <div className="" onClick={() => setStatus(!status)}>
          <Check status={status}/>
        </div>
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
