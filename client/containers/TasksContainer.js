import {connect} from 'react-redux'
import React from 'react'
import { updateStatusLeft, updateStatusRight } from '../actions'

const Tasks = (props) => {
  return(
    <div className='all-tasks'>
      <div className="todo-tasks six columns">
        <h3>Todo Tasks</h3>
        <ul>

          {findTodos(props.tasks).map((task, i) =>
            <div className='single-task' key={i}>
              <h5>{task.taskName}</h5>
              <li>{task.description}</li>
              <li>Assignee: {task.userName}</li>
              <li>Complexity: {task.complexity}<img className="complexity-img" src="banana.png" alt="banana" /></li>
              <button onClick={() => props.dispatch(updateStatusLeft(task))}> &#60; </button>
              <button onClick={() => props.dispatch(updateStatusRight(task))}> &#62;	</button>
            </div>
          )}
        </ul>
      </div>
      <div className="completed-tasks six columns">
        <h3>Completed Tasks</h3>
          <ul>
            {findCompleted(props.tasks).map((task, i) =>
              <div className='single-task' key={i}>
                <h5>{task.taskName}</h5>
                <li>{task.description}</li>
                <li>Assignee: {task.userName}</li>
                <li>Complexity: {task.complexity}<img className="complexity-img" src="banana.png" alt="banana" /></li>
                <button onClick={() => props.dispatch(updateStatusLeft(task))}> &#60; </button>
                <button onClick={() => props.dispatch(updateStatusRight(task))}> &#62;	</button>
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
