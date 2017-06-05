import React from 'react'
import {connect} from 'react-redux'

import * as actions from '../actions'

class Form extends React.Component {
 constructor(props) {
   super(props)
   this.state = {taskName: '', description: '', completionStatus: '', complexity: '', userName: ''}
 }

 handleChange(e) {
   this.setState({
     [e.target.name]: e.target.value
   })
 }

 getTasks(state) {
   return (state)
 }

 render() {
   return (
     <div>
       <label>Task Name
       <input type="text" name="taskName" value={this.state.taskName} onChange={this.handleChange.bind(this)}/></label>
       <br/>
       <label>Task Description
       <input type="text" name="description" value={this.state.description} onChange={this.handleChange.bind(this)}/></label>
       <br/>
       <label>Complexity Units
       <input type="text" name="complexity" value={this.state.complexity} onChange={this.handleChange.bind(this)}/></label>
       <br/>
       <label>User Of Task
       <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange.bind(this)}/></label>
       <button onClick={() => this.props.dispatch(actions.addTask(this.state))}>Create Ticket</button>
     </div>

   )
 }

}


Form = connect()(Form)

export default Form
