const db = require("../data/dbConfig.js")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find(){
    return db("recipes")
};