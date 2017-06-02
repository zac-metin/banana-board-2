import {connect} from 'react-redux'
import React from 'react'
import {updateStatus} from '../actions'



const Tasks = (props) => {
  console.log(props.tasks)
  return(
    <div className='all-tasks'>
      <div className="todo-tasks six columns">
        <h3>Todo Tasks</h3>
        <ul>

          {findTodos(props.tasks).map((task, i) =>
            <div key={i}>
              <li>Task: {task.taskName}; Assignee: {task.userName}; Complexity: {task.complexity}; Completion: {task.completionStatus}</li>
              <button onClick={() => props.dispatch(updateStatus(task))}> &#60; </button>
              <button> &#62;	</button>
            </div>
          )}
        </ul>
      </div>

      <div className="completed-tasks six columns">
        <h3>Completed Tasks</h3>
          <ul>
            {findCompleted(props.tasks).map((task, i) =>
              <div key={i}>
                <li>Task: {task.taskName}; Assignee: {task.userName}; Complexity: {task.complexity}; Completion: {task.completionStatus}</li>
                <button onClick={() => props.dispatch(updateStatus(task))}> &#60; </button>
                <button> &#62;	</button>
              </div>
            )}
          </ul>
      </div>

    </div>
  )
}

function findTodos(allTasks) {
  var todos = allTasks.filter((task) => {
    return task.completionStatus == 0
  })
  return todos
}

function findCompleted(allTasks) {
  var completed = allTasks.filter((task) => {
    return task.completionStatus == 1
  })
  return completed
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(
  mapStateToProps
)(Tasks)
