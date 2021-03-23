import React, { useState } from 'react'

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
          {/* <Check status={status}/> */}
          <div className={status ? "icon-done" : "icon-not-done"}>
            {status ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" ><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" /></svg>
            ) : (
              null
            )}
          </div>
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
