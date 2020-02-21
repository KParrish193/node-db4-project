
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ShoppingCart').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppingCart').insert([
        {ingredient_id: 1, ingredient_qty:1, recipe_id:2,},
        {ingredient_id: 4, ingredient_qty:1, recipe_id:3,},
        {ingredient_id: 7, ingredient_qty:8, recipe_id:1,}
      ]);
    });
};
