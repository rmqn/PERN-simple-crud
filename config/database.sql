CREATE DATABASE perntodo;

CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255),
  is_done boolean NOT NULL
);