import {connect} from 'react-redux'
import React from 'react'
import {toggleStatus} from '../actions'



const Tasks = (props) => {
  return(
  <div>
    {props.tasks.map((task, i) =>
      <div key={i}>
      <li>Task: {task.taskName}; Assignee: {task.userName}; Complexity: {task.complexity}; Completion: {task.completionStatus}</li>
      <button onClick={() => props.dispatch(toggleStatus(task))}> &#60; </button>
      <button> &#62;	</button>
      </div>
    )}
  </div>
)}


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(
  mapStateToProps
)(Tasks)
