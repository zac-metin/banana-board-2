import React from 'react'

import {connect} from 'react-redux'
import {getTasks} from '../actions/index'


import TasksContainer from '../containers/TasksContainer'
import Header from './Header'
import Footer from './Footer'

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
        <Header />
        <TasksContainer />
        <Footer />
      </div>
    )
  }
}
App = connect()(App)

export default App
