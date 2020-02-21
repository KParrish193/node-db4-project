const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

//endpoints
router.get('/', (req, res) => {
    Recipes.find()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes' });
    });
});

module.exports = router;