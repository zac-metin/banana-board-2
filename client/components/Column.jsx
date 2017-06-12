import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

import {updateStatus} from '../actions'
import Task from './Task'

const Column = (props) => {
  return (
    <div className="tasklist three columns">
      <h3><Link to={`/projects/${props.columns[0].project_id}/edit`}>{props.name}</Link></h3>
      <ul>

        {matchColumn(props.columnValue, props.tasks).map((task, i) =>
          <Task task={task} key={i} selected={task.id == props.selectedTask}/>
        )}

      </ul>
    </div>
  )
}

function matchColumn(col, tasks) {
  return tasks.filter((task) => task.completionStatus == col)
}

const mapStateToProps = (state) => {
  return {tasks: state.projectInfo.tasks,
    columns: state.projectInfo.columns,
    selectedTask: state.selectedTask
  }
}

export default connect(mapStateToProps)(Column)
