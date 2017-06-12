var express = require('express')
var router = express.Router()


let { post } = require('./functions/projectcolumns')


router.route('/')
  .post(post)




module.exports = router
