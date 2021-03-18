import React, { useState } from 'react'

function FormEditTodo({currentTodo, setEditing, updateTodo}) {

  const [todo, setTodo] = useState(currentTodo);

  const handleChange = e => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (todo) {
      updateTodo(todo)
      setEditing(false)
    }
    setTodo('')
  }

  const handleCancel = () => {
    setEditing(false);
  }


  return (
    <>
      <form action="" className="mb-6 text-center">
        <input
          type="text"
          name="description"
          value={todo.description}
          onChange={handleChange}
          className="border rounded py-2 px-4 mr-3 w-7/12"
        />
        <button className="rounded bg-blue-500 text-white py-2 px-4 mr-2" type="submit" onClick={handleSubmit}>Edit</button>
        <button className="rounded bg-red-500 text-white py-2 px-4" type="submit" onClick={handleCancel}>Cancel</button>
      </form>
    </>
  )
}

export default FormEditTodo
