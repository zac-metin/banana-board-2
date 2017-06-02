
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, taskName: 'Create API', description: 'Set up an API for our project to use', user_id: 1, completionStatus: 0},
        {id: 2, taskName: 'React', description: 'Create basic react components', user_id: 2, completionStatus: 0},
        {id: 3, taskName: 'Redux', description: 'Plug react components into redux to update state', user_id: 3, completionStatus: 1 },
        {id: 4, taskName: 'CSS', description: 'Apply CSS to our project', user_id: 4, completionStatus: 0}
      ]);
    });
 };
