import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import { DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

import Column from '../components/Column';

const Tasks = (props) => {
  return(
    <div className='all-tasks'>

      <Column id="0" name="Todo" />
      <Column id="1" name="In Progress" />
      <Column id="2" name="Blocked" />
      <Column id="3" name="Completed" />
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

// <Link to={'/addTask'}>
//   <button> Add task	</button>
// </Link>
