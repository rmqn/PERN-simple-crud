import React, { useEffect, useState } from 'react';
import Axios from "../src/service/todoServices";
import FormEditTodo from './components/FormEditTodo';
import FormInputTodo from './components/FormInputTodo'
import ListTodos from './components/ListTodos';

function App() {

  const initialTodo = { todo_id: null, description: "" };
  const [currentTodo, setCurrentTodo] = useState(initialTodo);
  const [editing, setEditing] = useState(false);
  const [todos, setTodos] = useState([]);


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
    <main className="container mx-auto p-6">
      <h1 className="text-6xl mb-6 text-center">Pern todo list</h1>
      {editing ? (
        <FormEditTodo currentTodo={currentTodo} setEditing={setEditing} updateTodo={updateTodo} />
      ) : (
        <FormInputTodo onSubmitForm={onSubmitForm} />
      )}
      <h1 className="text-2xl mb-3 text-center">List Todos</h1>
      <ListTodos todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </main>
  )
}

export default App

