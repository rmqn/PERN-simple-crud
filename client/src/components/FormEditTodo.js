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
      <form>
        <input
          type="text"
          name="description"
          value={todo.description}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>Edit</button>
        <button type="submit" onClick={handleCancel}>Cancel</button>
      </form>
    </>
  )
}

export default FormEditTodo
