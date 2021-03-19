import React, { useState } from 'react'
import cross from '../assets/images/icon-cross.svg'
import Check from './svg/Check'

function TodoItem({ todo, editTodo, deleteTodo, putIsDone, updateTodoStatus }) {

  const [isDone, setIsDone] = useState(todo.is_done)

  console.log(todo, 'is done :', isDone);



  return (
    <li className="list__container">
      <div className="test" onClick={() => updateTodoStatus(todo.todo_id,!isDone)}>

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
