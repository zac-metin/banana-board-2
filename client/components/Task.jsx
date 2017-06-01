import React from 'react'

const Task = (props) => (
<div className="Task">
  <div>{props.taskname}</div>
  <div>{props.id}</div>
</div>
)


export default Task
