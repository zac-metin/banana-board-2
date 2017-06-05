exports.up = function(knex, Promise) {
  return knex.schema.table('tasks', function (table){
      table.integer('project_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tasks', function (table){
      table.dropColumn('project_id')
  })
};
