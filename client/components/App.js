import React from 'react'

import {connect} from 'react-redux'
import {getTasks} from '../actions/index'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

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
      <Router>
        <div className='app-container'>
          <Header/>
          <TasksContainer/>
          <Footer/>
        </div>
      </Router>

    )
  }
}
App = connect()(App)

export default App

// <Link to={'/add'}>
//             <button>Add Task</button>
//    </Link>
//    <Route exact={true} path='/add' component={Form} />
