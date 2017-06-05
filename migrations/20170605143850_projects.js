exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('projects', (table) => {
    table.increments('id')
    table.integer('name')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('projects')
};
