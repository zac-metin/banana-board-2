import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {DragDropContext} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';

import Column from '../components/Column';

class Tasks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: props.tasks
    }
  }

  componentDidMount() {
    console.log("memes");
    //api request for project columns and tasks (both by math.params.id)
  }
  componentWillReceiveProps(props) {
    this.setState({tasks: props.tasks})
  }
  render() {
    return (
      <div className='all-tasks'>
        {columns.map((column) => <Column columnValue={column.column_value} name={column.name}/>)}
      </div>
    )
  }
}

const columns = [
  {
    column_value: 0,
    name: 'Todo'
  }, {
    column_value: 1,
    name: 'In Progress'
  }, {
    column_value: 2,
    name: 'Blocked'
  }, {
    column_value: 3,
    name: 'Completed'
  }
]

const mapStateToProps = (state) => {
  return {tasks: state.tasks}
}


export default connect(mapStateToProps)(Tasks)
