import React from 'react'
import {useState} from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState('');
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
       <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}


