const db = require("../data/dbConfig.js")

module.exports = {
    findRecipes,
    getShoppingList,
    getInstructions,
    add,
    update,
    remove
};

function findRecipes(){
    return db("recipes")
};

function getShoppingList(recipe_id){
    return db("recipes")
        .where({ id })
        .first()
        .then(recipe => {
            return db("shoppingCart")
            .join("recipes", "shoppingCart.recipe_id", "recipes.id")
            .join("ingredients", "shoppingCart.ingredient_id", "ingredient_id")
            .select("ingredient.id", "ingredient.description", "shoppingCart.ingredient_qty")
            .where({"shoppingCart.recipe_id": recipe_id })
            .orderBy("shoppingCart_ingredient_id");
        })
};

function getInstructions(recipe_id){
    return db("recipes")
        .where({ id })
        .first()
        .then(recipe => {
            return db("steps")
            .join("recipes", "steps.recipe_id", "recipes.id")
            .select(
                "recipe.recipe_name as Recipe Name", 
                "steps.step_number as Step Number", 
                "steps.step_instruction as Instruction")
            .where({"steps.recipe_id": recipe_id })
            .orderBy("steps.step_number", "asc");
        })
};

function add(recipe){
    return db("recipes")
        .insert(recipe, "id")
        .then(id => {
            return findById(id[0])
        });
};

function update(changes, id){
    return db("recipes")
        .where({ id })
        .update(changes)
        .then(updatedRecipe => {
            return findById(id[0]);
        });
};

function remove(id){
    return db("recipes")
        .where({ id })
        .then(found => {
            return db("recipes")
            .where({ id })
            .del()
        });
};