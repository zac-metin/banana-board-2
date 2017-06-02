
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, taskName: 'create API', description: 'set up an API for our project to use', user_id: 1, completionStatus: 0, userName: 'JV'},
        {id: 2, taskName: 'React', description: 'create basic react components', user_id: 2, completionStatus: 0, userName: 'JV'},
        {id: 3, taskName: 'Redux', description: 'plug react components into redux to update state', user_id: 3, completionStatus: 1, userName: 'JV'},
        {id: 4, taskName: 'CSS', description: 'apply CSS to our project', user_id: 4, completionStatus: 0, userName: 'JV'}
      ]);
    });
 };
