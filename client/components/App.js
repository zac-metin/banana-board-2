import React from 'react'

import {connect} from 'react-redux'
import {getTasks, getProjects} from '../actions/index'
import {HashRouter as Router, Route} from 'react-router-dom'


import TasksContainer from '../containers/TasksContainer'
import Header from './Header'
import Footer from './Footer'
import Form from './Form'
import Projects from './Projects'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dispatch: props.dispatch
    }
  }
  componentDidMount() {
    this.state.dispatch(getTasks())
    this.state.dispatch(getProjects())
  }
  render() {
    return (
       <Router>
       <div className='app-container'>
         <Header />
        <Route exact={true} path='/' component={Projects} />
        <Route exact={true} path='/projects/:id/tasks' component={TasksContainer} />
        <Route exact={true} path='/addTask' component={Form} />
         <Footer />
       </div>
        </Router>

    )
  }
}
App = connect()(App)

export default App
