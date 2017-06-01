import React from 'react'
import {connect} from 'react-redux'

import Task from './Task'


const Board = (props) => {
  return (
    <div className='board'>
      <p>Hello from Board</p>
      {renderTasks(props.tasks)}
    </div>
  )
}


function renderTasks (taskArray) {
    return <Task key={task.id} task={task} />
  })
}

function mapState2Props(state) {
  return {
    tasks: state.tasks
  }
}


export default connect(mapState2Props)(Board)
