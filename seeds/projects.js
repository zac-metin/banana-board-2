
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 0, name: 'Banana Board'},
        {id: 1, name: 'Better Tinder'}
      ]);
    });
 };
