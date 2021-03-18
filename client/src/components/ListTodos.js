import React from 'react'
import check from '../assets/images/icon-check.svg'
import Check from './svg/Check'

function ListTodos({ todos, editTodo, deleteTodo }) {
  return (
      <ul>
        {todos.length > 0 ? (
          <div className="list">
            {todos.map((todo) => (
              <div className="list__container">
              <Check/>
              <li key={todo.todo_id} onClick={() => editTodo(todo.todo_id, todo)}>{todo.description}</li>
                {/* <td onClick={() => editTodo(todo.todo_id, todo)}></td>
                <td onClick={() => deleteTodo(todo.todo_id)}></td> */}
              </div>
            ))}
          </div>
        ) : (
          <li>No todos found</li>
        )}
      </ul>
  )
}

export default ListTodos
