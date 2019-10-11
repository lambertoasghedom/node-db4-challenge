
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredents').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredents').insert([
        {recipe_id: '1', ingredient_id: '1', quantity: 3},
        {recipe_id: '1', ingredient_id: '2', quantity: 3},
        {recipe_id: '1', ingredient_id: '3', quantity: 3},
        {recipe_id: '2', ingredient_id: '4', quantity: 3},
        {recipe_id: '2', ingredient_id: '1', quantity: 3},
      ]);
    });
};
