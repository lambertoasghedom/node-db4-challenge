
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments()
    tbl.string('name', 128)
        .unique()
        .notNullable()
    tbl.string('description', 128)
  })
  .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name', 128)
        .unique()
        .notNullable()
  })
  .createTable('recipe_ingredents', tbl => {
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
      tbl.integer('quantity')
        .unsigned()
        .notNullable()
    tbl.primary(['recipe_id', 'ingredient_id'])
  })
  .createTable('steps', tbl => {
      tbl.increments()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
    tbl.integer('step_number')
        .unsigned()
        .notNullable()
    tbl.string('description', 128)
        .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('steps')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
