import request from 'superagent'

export const editColumn = (oldName, newName) => {
  return {
    type: 'EDIT_COLUMN',
    oldName,
    newName
  }
}

export const updateColumn = (oldName, newName) => {
  return (dispatch) => {
    console.log('actions', {oldName, newName});
    request
      .post('/api/projectcolumns')
      .send({oldName, newName})
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        else {
          console.log(res+"is this empty??");
        dispatch(editColumn(res.body))
      }
      })
  }
}
