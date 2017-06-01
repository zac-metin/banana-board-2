import React from 'react'

class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state {
      taskName: '',
      description: '',
      completionStatus: '',
      complexity: '',
      user_id: ''
    }

    handleChange(e) {
      this.setState ({
        [e.target.name]: e.target.value
      })
    }

    getTasks(state) {
      return(state)
    }

    render () {
      return (
        <div>
        <label htmlFor="Ticket Name" />
        <input type="text" name="taskName" value={this.state.taskName} onChange={this.handleChange.bind(this)} />
        <br /><label htmlFor="Task Description" />
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange.bind(this)} />
        <br /><label htmlFor="Banana Column" />
        <input type="text" name="completionStatus" value={this.state.completionStatus} onChange={this.handleChange.bind(this)} />
        <br /><label htmlFor="Complexity Units" />
        <input type="text" name="complexity" value={this.state.complexity} onChange={this.handleChange.bind(this)} />
        <br /><label htmlFor="User ID" />
        <input type="text" name="user_id" value={this.state.user_id} onChange={this.handleChange.bind(this)} />
        <button onClick={() => this.props.dispatch(getTasks(this.state))}>Create Ticket</button>
      </div>

      )
    }

  }
}


Form = connect()(Form)

export default Form
