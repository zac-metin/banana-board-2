import React from 'react'
import {connect} from 'react-redux'

import Task from './Task'


const Board = (props) => (
  <div className='Board'>
    {renderTasks(props.tasks)}
  </div>
)

function renderTasks (taskArray) {
  return taskArray.map((task) => {
    return <Task key={task.id} task={task} />
  })
}

function mapState2Props(state) {
  return {
    tasks: state.tasks
  }
}


export default connect(mapState2Props)(Task)
