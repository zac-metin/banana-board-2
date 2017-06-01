
import tasksArray from '../../data/tasks'
const initialState = tasksArray.tasks

function tasks(state = initialState, action) {
  console.log(state);
   switch (action.type) {
    case 'TOGGLE_STATUS':
    return (
       state.map((task) => {return action.id == task.id ? {...task, completionStatus: !task.completionStatus} : task})
    )


    default: return state
  }
}

export default tasks
