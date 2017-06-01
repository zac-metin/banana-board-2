import React from 'react'
import {connect} from 'react-redux'
import {getTasks} from '../actions/index'
import TasksContainer from '../containers/TasksContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dispatch: props.dispatch
    }
  }
  componentDidMount() {
    this.state.dispatch(getTasks())
  }
  render() {
    return (
      <div className='app-container'>
        <TasksContainer/>

      </div>
    )
  }
}
App = connect()(App)

export default App
