import React from 'react'

function ListTodos({ todos, editTodo, deleteTodo }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {todos.length > 0 ? (
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><button onClick={() => editTodo(todo.todo_id, todo)}>Edit</button></td>
                <td><button onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tr>
            <td>No todos found</td>
          </tr>
        )}
      </table>
    </>
  )
}

export default ListTodos
