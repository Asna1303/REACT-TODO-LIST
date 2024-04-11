import React from 'react'

export const todo = () => {
  return (
    <div className="Todo">
       <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
    </div>
  )
}


