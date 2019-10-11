
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Tortilla'},
        {name: 'Avocado'},
        {name: 'Lime'},
        {name: 'Chesse'},
        {name: 'Cilantro'},
      ]);
    });
};
