var express = require('express')
var router = express.Router()

var tasksDB = require('../db')

let {get, post, put, del, getAll} = require('./functions/projects')

router.route('/')
  .get(get)
  .post(post)

router.route('/:project_id')
  .get(getAll)


//
// let {get, post, put, del} = require('./tasks')
//
// router.route('/:project_id/tasks')
//   .get(get)
//   .post(post)

// router.route('/:project_id/tasks/task_id')
//   .put(put)
//   .del(del)


//get projects
//post projects
//edit project
//delete project

//get ta


module.exports = router
