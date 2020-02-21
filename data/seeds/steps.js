
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 3, step_number: 1, step_instruction: "pour cereal", step_number: 2, step_instruction: "add spoon"},
        {id: 2, recipe_id: 1, step_number: 1, step_instruction: "melt cheese on tortilla"},
        {id: 3, recipe_id: 2, step_number: 1, step_instruction: "make sandwich with peanut butter and jelly"}
      ]);
    });
};
