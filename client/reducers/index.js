import {combineReducers} from 'redux'

import tasks from './tasks'
import projects from './projects'
import projectInfo from './projectInfo'
import selectedTask from './selectedTask'

export default combineReducers({
  tasks,
  projects,
  projectInfo,
  selectedTask
})
