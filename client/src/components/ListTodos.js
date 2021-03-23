import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';



function ListTodos({ todos, editTodo, deleteTodo, updateTodoStatus }) {

  const [seeAll, setSeeAll] = useState(false)
  const [seeOnlyActive, setSeeOnlyActive] = useState(false)
  const [seeOnlyCompleted, setSeeOnlyCompleted] = useState(false)
  const [itemsLeft, setItemsLeft] = useState([])
  const [filterOnlyActive, setFilterOnlyActive] = useState([])
  const [filterOnlyCompleted, setFilterOnlyCompleted] = useState([])


  useEffect(() => {
    itemDone()
    setSeeAll(true)
  }, [todos])


  const itemDone = () => {
    const data = Object.values(todos).filter(todo => todo.is_done === false)
    setItemsLeft(data)
  }

  const filterAll = () => {
    setSeeAll(true)
    setSeeOnlyActive(false)
    setSeeOnlyCompleted(false)
  }
  const filterActive = () => {
    const data = Object.values(todos).filter(todo => todo.is_done === false)
    setFilterOnlyActive(data)
    setSeeAll(false)
    setSeeOnlyActive(true)
    setSeeOnlyCompleted(false)
  }
  const filterCompleted = () => {
    const data = Object.values(todos).filter(todo => todo.is_done === true)
    setFilterOnlyCompleted(data)
    setSeeAll(false)
    setSeeOnlyActive(false)
    setSeeOnlyCompleted(true)
  }

  const removeTodosCompleted = () => {
    const data = Object.values(todos).filter(todo => todo.is_done === true)
    data.map((i) => {
      return deleteTodo(i.todo_id)
    })
    setSeeAll(true)
    setSeeOnlyActive(false)
    setSeeOnlyCompleted(false)
  }

  return (
    <>
      <ul className="list">
        {todos.length > 0 ? (
          <>
            {seeAll &&
              <>
                {todos.map((todo) => (
                  <TodoItem key={todo.todo_id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} updateTodoStatus={updateTodoStatus} />
                ))}
              </>
            }
            {seeOnlyActive &&
              <>
                {filterOnlyActive.map((todo) => (
                  <TodoItem key={todo.todo_id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} updateTodoStatus={updateTodoStatus} />
                ))}
              </>
            }
            {seeOnlyCompleted &&
              <>
                {filterOnlyCompleted.map((todo) => (
                  <TodoItem key={todo.todo_id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} updateTodoStatus={updateTodoStatus} />
                ))}
              </>
            }
            <div className="list__footer">
              <div className="list__footer--left">
                {itemsLeft.length} items left
              </div>
              <div className="list__footer--links">
                <button href="#" onClick={filterAll}>All</button>
                <button href="#" onClick={filterActive}>Active</button>
                <button href="#" onClick={filterCompleted}>Completed</button>
              </div>
              <div className="list__footer--clear">
                <button href="#" onClick={removeTodosCompleted}>Clear Completed</button>
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
