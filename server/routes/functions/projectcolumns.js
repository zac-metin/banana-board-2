
const tasksDB = require('../../db.js')

const post = (req, res) => {
  console.log("api request made", req.body);
  let connection = req.app.get('connection')
  tasksDB.editColumn(req.body,connection)
    .then((columns) => {
      res.sendStatus(201)
    })
}



module.exports = {
   post
}
