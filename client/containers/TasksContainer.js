import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

import {getProjectInfo} from '../actions/index'
import Column from '../components/Column';

class Tasks extends React.Component {

  componentDidMount() {
   this.props.dispatch(getProjectInfo(this.props.match.params.id))
    //api request for project columns and tasks (both by math.params.id)
  }

  render() {
    const { columns } = this.props.projectInfo
    return (
      <div className='all-tasks'>
        {columns.map((column) => <Column column={column} name={column.column_name}/>)}
      </div>
    )
  }
 }

const mapStateToProps = (state) => {
  return {tasks: state.tasks,
projectInfo: state.projectInfo
  }
}

export default connect(mapStateToProps)(Tasks)
