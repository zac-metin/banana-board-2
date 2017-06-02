import React from 'react'

const TodoTasks = (props) => {
  console.log("props from TodoTasks:", props)
  return (
    <div className="todo-tasks six columns">
      <p>Tasks that need to be done</p>
    </div>
  )
}

export default TodoTasks
