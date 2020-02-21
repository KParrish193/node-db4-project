
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Quesadilla', shopping_list_id: 3},
        {id: 2, recipe_name: 'PBJ', shopping_list_id: 1},
        {id: 3, recipe_name: 'Cereal', shopping_list_id: 2}
      ]);
    });
};
