import React, { useState } from 'react'
import Check from './svg/Check';
import cross from '../assets/images/icon-cross.svg'

import TodoItem from './TodoItem';

function ListTodos({ todos, editTodo, deleteTodo, putIsDone, currentTodo, updateTodoStatus }) {

  const [isDone, setIsDone] = useState(currentTodo)

  console.log(isDone);


  return (
    <ul className="list">
      {todos.length > 0 ? (
        <>
          {todos.map((todo) => (
            // <TodoItem todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} putIsDone={putIsDone} updateTodoStatus={updateTodoStatus} />
            <li className="list__container">
              <div className="test" onClick={() => putIsDone(todo.todo_id, todo.is_done)}>

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
          ))}
        </>
      ) : (
        <li>No todos found</li>
      )}
    </ul>
  )
}

export default ListTodos
