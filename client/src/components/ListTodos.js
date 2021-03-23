import React, { useEffect, useState } from 'react'


import TodoItem from './TodoItem';

function ListTodos({ todos, editTodo, deleteTodo, putIsDone, currentTodo, updateTodoStatus }) {

  const [isDone, setIsDone] = useState(currentTodo)
  const [itemsLeft, setItemsLeft] = useState([])

  // console.log(isDone);

  useEffect(() => {
    itemDone()
  }, [todos])


  const itemDone = () => {
    const data = todos.filter(todo => todo.is_done === false)
    setItemsLeft(data)
  }


  return (
    <>
      <ul className="list">
        {todos.length > 0 ? (
          <>
            {todos.map((todo) => (
              <TodoItem todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} updateTodoStatus={updateTodoStatus}/>
            ))}
            <div className="list__footer">
              <div className="list__footer--left">
                {itemsLeft.length} items left
              </div>
              <div className="list__footer--links">
                <a href="#">All</a>
                <a href="#">Active</a>
                <a href="#">Completed</a>
              </div>
              <div className="list__footer--clear">
                <a href="#">Clear Completed</a>
              </div>
            </div>
          </>
        ) : (
          <li>No todos found</li>
        )}
      </ul>
      <h6 className="h6">Drag an drop to reorder list</h6>
    </>
  )
}

export default ListTodos
