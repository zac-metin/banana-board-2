exports.up = function(knex, Promise) {
  return knex.schema.table('tasks', function (table){
      table.string('userName')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tasks', function (table){
      table.dropColumn('userName')
  })
};
