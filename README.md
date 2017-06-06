# HappyTaskWall

Wireframe:

![banana](http://i.imgur.com/xUVZjws.jpg)

Learning Objectives:

Matt: Not visual, staying away from the css. Getting nitty gritty in the back-end.

Alisa: Redux

Zac: API, Routes

Andy: React, APIs

Roles:
Git Master - Zac
Scrum Master - Andy
new scrum master - Matt
durry muncher - Harrison

Minimum Viable Product - Thursday June 1 :

Two columns, ability to move task from column to column and add task.


API:

GET /projects
[ {id:1, name: 'Tinder'}, {id: 2, name: 'Banana Board'}]

GET /projects/:id

{
  tasks: [
  {id: 1, taskName: 'create API', description: 'set up an API for our project to use', user_id: 1, completionStatus: 0, userName: 'JV', complexity: 2, project_id: 0},
  {id: 2, taskName: 'React', description: 'create basic react components', user_id: 2, completionStatus: 0, userName: 'JV', complexity: 4, project_id: 0}
  ],

  columns: [
  {id: 1, project_id: 0, column_name: 'Todo', column_value: 0},
  {id: 2, project_id: 0, column_name: 'In Progress', column_value: 1},
  {id: 3, project_id: 0, column_name: 'Blocked', column_value: 2},
  {id: 4, project_id: 0, column_name: 'Completed', column_value: 3}
  ]
}

POST /projects/

req.body = {
  project: {name: 'Spin the Goon'},
  columns: [
  {column_name: 'Todo', column_value: 0},
  {column_name: 'In Progress', column_value: 1}]
  }

adds project name and project column configuration
