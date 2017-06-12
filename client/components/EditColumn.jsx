import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'

import {updateStatus} from '../actions'

class EditColumn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: this.props.columns,
      newColNames: {
      }
    }
  }
  adjustColNames(e) {
    let newColNames=this.state.newColNames
    newColNames[e.target.name] = e.target.value
    this.setState({newColNames})
  }
  submitChanges(e) {
    e.preventDefault()
    console.log("submitting changes", this.state.newColNames);
    // this.props.dispatch(updateColumns(this.state.newColNames))
  }

  render() {

    return (
      <div className="tasklist three columns">
        <h3>
          <form>
            <input type="text" name={this.props.name} className="inputcolname" defaultValue={this.props.name} onChange={(e) => this.adjustColNames(e)}></input>
            <button className="savebtn" onClick={(e) => this.submitChanges(e)}>Save</button>
          </form>
        </h3>
        <ul>
          {matchColumn(this.props.columnValue, this.props.tasks).map((task, i) => <div className='single-task' key={i}>
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
}

function matchColumn(col, tasks) {
  return tasks.filter((task) => task.completionStatus == col)
}

const mapStateToProps = (state) => {
  return {
    tasks: state.projectInfo.tasks,
    columns: state.projectInfo.columns
  }
}

export default connect(mapStateToProps)(EditColumn)
