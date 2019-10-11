
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Tacos', description: 'makes 3 tacos'},
        {name: 'Guaps', description: 'makes 1 guap'},
        {name: 'Nachos', description: 'makes 5 nachos'}
      ]);
    });
};

