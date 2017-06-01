
import tasksArray from '../../data/tasks'
const initialState = []

function tasks(state = initialState, action) {
   switch (action.type) {
     case 'RECEIVE_TASKS':
     return [...action.tasks]

    case 'TOGGLE_STATUS':
    return (
       state.map((task) => {return action.id == task.id ? {...task, completionStatus: task.completionStatus+1} : task})
    )


    default: return state
  }
}

export default tasks
