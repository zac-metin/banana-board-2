
const initialState = 1

function selectedTask(state = initialState, action) {
   switch (action.type) {
     case 'SELECT_TASK':
     return action.task.id
    default: return state
  }
}



export default selectedTask
