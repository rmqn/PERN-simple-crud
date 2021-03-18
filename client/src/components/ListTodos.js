import React from 'react'

function ListTodos({ todos, editTodo, deleteTodo }) {
  return (
    <>
      <table className="border m-auto rounded table-auto w-8/12">
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
                <td onClick={() => editTodo(todo.todo_id, todo)} className="border-r border-b bg-blue-500 text-white text-center cursor-pointer">     <svg className="w-6 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg></td>
                <td onClick={() => deleteTodo(todo.todo_id)} className=" border-r border-b bg-red-500 text-white text-center cursor-pointer"><svg  className="w-6 m-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg></td>
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
