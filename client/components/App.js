import React from 'react'

import TasksContainer from '../containers/TasksContainer'
import Loader from './Loader'
// import Board from './Board'

const App = () => (
  <div className='app-container'>
    <Loader />
    <TasksContainer />
  </div>
)

export default App
