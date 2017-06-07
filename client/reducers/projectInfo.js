
function projectInfo(state = {columns:[]}, action) {
   switch (action.type) {
     case 'RECEIVE_PROJECT_INFO':
     return {...action.projectInfo}

    default: return state
  }
}

export default projectInfo
