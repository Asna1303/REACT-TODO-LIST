import React from 'react'
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }
  return (
    <div className="TodoWrapper">
 <TodoForm addTodo={addTodo} />
 {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
 <Todo
 key={todo.id}
 task={todo}
 deleteTodo={deleteTodo}
 editTodo={editTodo}
 toggleComplete={toggleComplete}/>
    </div>
  )
}


