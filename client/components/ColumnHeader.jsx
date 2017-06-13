import React from 'react'
import {connect} from 'react-redux'
import {updateColumn} from '../actions/editcolumn'



class ColumnHeader extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.column.id);
    this.state = {
      name: props.name,
      editFlag: false,
      newName: props.name,
      id: props.column.id
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({name: nextProps.name, id: nextProps.column.id})
  }
  submitEdit(e) {
    e.preventDefault()
    if (this.state.name != this.state.newName) {
      this.props.dispatch(updateColumn(this.state.id, this.state.newName))
    }
    this.setState({name: this.state.newName, editFlag: false})
  }
  toggleEdit(boolean) {
    this.setState({editFlag: boolean})
  }
  updateNameDetails(newName) {
    this.setState({newName})
  }
  renderColumnName() {
    return <h3 className="columnName" onClick={() => this.toggleEdit(true)}>{this.state.name}</h3>
  }
  renderSubmitButton() {
    return <button type="submit" className="savebtn greenbtn" onClick={(e) => this.submitEdit(e)}>&#10004;</button>;

  }
  renderEditColumnName() {
    return <form>
      <input type="text" name="newName" className="inputcolname" defaultValue={this.state.newName} onChange={(e) => this.updateNameDetails(e.target.value)} />
      {this.state.newName.length <= 20 && this.renderSubmitButton()}
      <button className="savebtn redbtn" onClick={() => this.toggleEdit(false)}>&#10007;</button>
    </form>
  }
  render() {
    return (
      <div className="taskList">
        {this.state.editFlag
          ? this.renderEditColumnName()
          : this.renderColumnName()
        }
      </div>
    )
  }

}

export default connect()(ColumnHeader)
