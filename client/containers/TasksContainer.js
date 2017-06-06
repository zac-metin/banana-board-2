import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import { DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

import Column from '../components/Column';

const Tasks = (props) => {
  return(

    <div className='all-tasks'>
{columns.map((column) =>   <Column columnValue={column.column_value} name={column.name} />)}
    </div>
  )
}

const columns = [{column_value:0, name: 'Todo'}, {column_value:1, name: 'In Progress'}, {column_value:2, name: 'Blocked'}, {column_value: 3, name:'Completed'}]



const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(
  mapStateToProps
)(Tasks)
