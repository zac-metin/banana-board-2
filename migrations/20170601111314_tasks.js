
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function (table){
      table.increments('id').primary()
      table.string('taskName')
      table.text('description')
      table.integer('user_id')
      table.integer('completionStatus')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks')
 };
