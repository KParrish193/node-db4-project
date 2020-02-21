
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_description: 'peanut butter'},
        {id: 2, ingredient_description: 'jelly'},
        {id: 3, ingredient_description: 'bread'},
        {id: 4, ingredient_description: 'cereal'},
        {id: 5, ingredient_description: 'milk'},
        {id: 6, ingredient_description: 'cheese'},
        {id: 7, ingredient_description: 'tortillas'}
      ]);
    });
};
