import React from 'react'
import { useState } from 'react'
export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    
      e.preventDefault();
     
      editTodo(value, task.id);
    };
  return (
    <div>
      EditTodoForm
    </div>
  )
}


