import React, { useState } from 'react'
import cross from '../assets/images/icon-cross.svg'
import Check from './svg/Check'

function TodoItem({ todo, editTodo, deleteTodo, updateTodoStatus }) {

  const [isDone, setIsDone] = useState(todo.is_done)

  const handleChange = () => {
    setIsDone(!isDone)
    updateTodoStatus({ todo_id: todo.todo_id, is_done: !isDone })
  }
  console.log(todo, 'is done :', isDone);

  return (
    <li className="list__container">
      <div className="" onClick={handleChange}>
        <Check status={isDone} />
      </div>
      <h3
        key={todo.todo_id}
        onClick={() => editTodo(todo.todo_id, todo)}
        className={isDone ? "list__item--done" : null}
      >{todo.description}</h3>
      <img
        src={cross}
        alt=""
        onClick={() => deleteTodo(todo.todo_id)} className="list__cross"
      />
    </li>
  )
}

export default TodoItem
