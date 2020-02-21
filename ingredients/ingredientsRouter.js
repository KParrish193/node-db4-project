const router = require("express").Router();

const Ingredient = require("./ingredients-model.js");

router.get("/:id/recipes", async (req, res) => {
    const { id } = req.params;

    try {
        const recipes = await Ingredient.getIngredientRecipes(id);

        if (recipes.length !== 0) {
            res.status(200).json(recipes);
        } else {
            res.status(404).json({ errorMessage: "Ingredient not found" });
        }
    } catch (err) {
        res.status(500).json({ errorMessage: err.message });
    }
});

module.exports = router;