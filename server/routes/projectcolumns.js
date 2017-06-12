var express = require('express')
var router = express.Router()

var tasksDB = require('../db')

let {get, post} = require('./functions/projectcolumns')

router.route('/')
  .get(get)
  .post(post)
