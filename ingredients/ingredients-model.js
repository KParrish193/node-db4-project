const db = require("../../data/db-config.js");

function getIngredientRecipes(id) {
    return db("ingredients")
        .where({ id })
        .first()
        .then(ingredient => {
        return db("shoppingCart")
            .join("recipes", "shoppingCart.recipe_id", "recipes.id")
            .join("ingredients", "shoppingCart.ingredient_id", "ingredients.id")
            .select("recipes.id", "recipes.recipe_name")
            .where({ "ingredients.id": id });
        });
}

module.exports = { getIngredientRecipes };