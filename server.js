const express = require('express');
const app = express();
require('dotenv').config({path: './config/.env'});
const cors = require('cors');
const pool = require('./config/db');

//middleware
app.use(cors());
app.use(express.json());

// ROUTES
// Create 
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const { is_done } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description, is_done) VALUES($1, $2) RETURNING *", [description, is_done]);
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

// Find all
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo ORDER BY todo_id DESC');
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// Find one
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

// Update
app.patch("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    console.log(description);
    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
    res.json("Todo was updated");
  } catch (err) {
    console.error(err.message);
  }
})
// Update status value
app.patch("/todos/status/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { is_done } = req.body;
    console.log(is_done);
    const updateTodo = await pool.query("UPDATE todo SET is_done = $1 WHERE todo_id = $2", [is_done, id]);
    res.json("Todo was updated");
  } catch (err) {
    console.error(err.message);
  }
})

// Delete
app.delete("/todos/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo was deleted !")
  } catch (err) {
    console.error(err.message);
  } 
})


app.listen(5000, () => {
  console.log('Server listenning on port 5000');
})