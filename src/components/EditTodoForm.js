import React from 'react'
import { useState } from 'react'
export const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);
  return (
    <div>
      EditTodoForm
    </div>
  )
}


