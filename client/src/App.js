import React, { useEffect, useState } from 'react';
import Axios from "../src/service/todoServices";
import Background from './components/svg/Background';
import FormEditTodo from './components/FormEditTodo';
import FormInputTodo from './components/FormInputTodo'
import ListTodos from './components/ListTodos';
import DarkMod from './components/svg/DarkMod';

function App() {

  const initialTodo = { todo_id: null, description: "" };
  const [currentTodo, setCurrentTodo] = useState(initialTodo);
  const [editing, setEditing] = useState(false);
  const [todos, setTodos] = useState([]);

  const [dark, setDark] = useState(false);


  useEffect(() => {
    listTodos();
  }, [])

  // READ
  const listTodos = async () => {
    await Axios.getAll()
      .then(response => {
        setTodos(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  // CREATE
  const onSubmitForm = async (data) => {
    await Axios.create(data)
      .then(() => {
        setTodos(data)
        refreshList();
      })
      .catch(err => {
        console.error(err);
      });
  }

  // EDIT
  const editTodo = (id, todo) => {
    setEditing(true);
    setCurrentTodo(todo);
  };

  // UPDATE
  const updateTodo = async (data) => {
    await Axios.update(data.todo_id, data)
      .then(() => {
        setTodos(data)
        setEditing(false);
        refreshList();
      })
      .catch(err => {
        console.log(err);
      });
  };
  // UPDATE STATUS
  const updateTodoStatus = async (data) => {
    await Axios.updateStatus(data.todo_id, data)
      .then(() => {
        const newData = [...todos, data]
        setTodos(newData)
        refreshList();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // DELETE
  const deleteTodo = async (id) => {
    await Axios.remove(id)
      .then(() => {
        refreshList();
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // refresh
  const refreshList = () => {
    listTodos();
  };


  return (
    <div className=" ">
      <Background />
      <main className="main">
        <div className="main__title">
          <h1>TODO</h1>
          <span onClick={() => setDark(!dark)}>
            <DarkMod dark={dark} />
          </span>
        </div>
        {editing ? (
          <FormEditTodo
            currentTodo={currentTodo}
            setEditing={setEditing}
            updateTodo={updateTodo}
          />
        ) : (
          <FormInputTodo
            onSubmitForm={onSubmitForm}
          />
        )}
        <ListTodos
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          updateTodoStatus={updateTodoStatus}
        />
      </main>
    </div>
  )
}

export default App

