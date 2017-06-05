
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('projectColumns', (table) => {
    table.increments('id')
    table.integer('project_id')
    table.integer('column_value')
    table.string('column_name')

  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('projectColumns')
};
