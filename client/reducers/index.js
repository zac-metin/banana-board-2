import {combineReducers} from 'redux'

import tasks from './tasks'
import projects from './projects'
import projectInfo from './projectInfo'

export default combineReducers({
  tasks,
  projects,
  projectInfo
})
