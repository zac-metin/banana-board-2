exports.up = function(knex, Promise) {
  return knex.schema.table('tasks', function (table){
      table.integer('complexity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tasks', function (table){
      table.dropColumn('complexity')
  })
};
