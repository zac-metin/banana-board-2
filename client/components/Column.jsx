import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

import {updateStatus} from '../actions'

const Column = (props) => {
    //  console.log(props.projectInfo);
  return (
    <div className="tasklist three columns">
      <h3>{props.name}</h3>
      <ul>
        {matchColumn(props.columnValue, props.tasks).map((task, i) => <div className='single-task' key={i}>
          <li>
            <h5>{task.taskName}
              <span className="userName">{task.userName}</span>
            </h5>
          </li>
          <li>
            <span className="description">{task.description}</span>
          </li>
          <li>
            <div className="flexrow">
              <div className="leftarrow" onClick={() => props.dispatch(updateStatus(task, -1))}>🡰</div>
              {task.complexity}<img className="complexity-img" src="banana.png" alt="banana"></img>
              <div className="rightarrow" onClick={() => props.dispatch(updateStatus(task, 1))}>🡲</div>
            </div>
          </li>
        </div>)}
      </ul>
    </div>
  )
}

function matchColumn(col, tasks) {
  return tasks.filter((task) => task.completionStatus == col)
}

const mapStateToProps = (state) => {
  return {tasks: state.projectInfo.tasks, projectInfo: state.projectInfo}
}

export default connect(mapStateToProps)(Column)
