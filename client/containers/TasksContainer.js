import {connect} from 'react-redux'
import React from 'react'
import { DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

import { updateStatusLeft, updateStatusRight } from '../actions'

const Tasks = (props) => {
  return(
    <div className='all-tasks'>
      <div className="todo-tasks three columns">
        <h3>Todos Tasks</h3>
        <ul>
          {matchColumn(0,props).map((task, i) =>
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
      <div className="completed-tasks three columns">
        <h3>Completed Tasks</h3>
          <ul>
            {matchColumn(1,props).map((task, i) =>
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
    <div className="todo-tasks three columns">
      <h3>Column 3</h3>
      <ul>
        {matchColumn(2,props).map((task, i) =>
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
    <div className="completed-tasks three columns">
      <h3>Column 4</h3>
        <ul>
          {matchColumn(3,props).map((task, i) =>
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

function matchColumn(col,props) {
  return props.tasks.filter((task) => task.completionStatus == col)
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(
  mapStateToProps
)(Tasks)
