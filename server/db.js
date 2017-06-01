
const getTasks = (db) => {
  return db('tasks')
    .select('*')
}

module.exports = {
  getTasks
}
