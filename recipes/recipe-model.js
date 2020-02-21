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

function findById(id){
    return db("schemes")
        .where({ id })
        .first();
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
        .then(updatedScheme => {
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