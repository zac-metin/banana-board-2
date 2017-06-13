
function projectInfo(state = {columns:[]}, action) {
   switch (action.type) {
     case 'RECEIVE_PROJECT_INFO':
     return {...action.projectInfo}

     case 'EDIT_COLUMN':
       let newState = {...state}
       console.log({newState});
      //  newState.column = action.column
       return newState


    default: return state

  }
}

export default projectInfo
