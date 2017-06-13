import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

import ColumnHeader from './ColumnHeader'
import {updateStatus} from '../actions'
import Task from './Task'

const Column = (props) => {
  console.log("rendering column", {props});
  return (
    <div className="tasklist three columns">
      <ColumnHeader name={props.name} column={props.column}/>
      <ul>

        {matchColumn(props.column.columnValue, props.tasks).map((task, i) =>
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
