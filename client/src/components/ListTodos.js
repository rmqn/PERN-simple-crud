import React from 'react'

function ListTodos({ todos, editTodo, deleteTodo }) {
  return (
    <>
      <table className="border m-auto rounded table-auto">
        <thead>
          <tr className="">
            <th className="border-b border-r rounded px-6 py-2 text-xl text-left">Description</th>
            <th className="border-b border-r rounded px-6 py-2 text-xl text-center">Edit</th>
            <th className="border-b rounded px-6 py-2 text-xl">Delete</th>
          </tr>
        </thead>
        {todos.length > 0 ? (
          <tbody className="m-6">
            {todos.map((todo) => (
              <tr key={todo.todo_id}>
                <td className="rounded px-6 py-2 border-r border-b">{todo.description}</td>
                <td className="border-r border-b bg-blue-700 text-white text-center"><button onClick={() => editTodo(todo.todo_id, todo)}>Edit</button></td>
                <td className=" border-r border-b bg-red-500 text-white text-center"><button onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
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
