
exports.up = function(knex) {
    return knex.schema
    
    .createTable("recipes", col => {
        col.increments()
        col 
            .text("recipe_name", 128)
            .notNullable()
            .unique()
            .index()
        col 
            .integer("shopping_list_id")
            .notNullable()
        })

    .createTable("ingredients", col => {
        col.increments()
        col 
            .text("ingredient_description", 128)
            .notNullable()
            .unique()
            .index()
        })

    .createTable("steps", col => {
        col.increments()
        col
            .text("step_number")
            .notNullable();
        col 
            .text("step_instruction", 128)
            .notNullable()
            .unique()
            .index()
        col
            .integer("recipe_id")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("recipes")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        })

    .createTable("shoppingCart", col => {
        col
            .primary(["recipe_id", "ingredient_id"])
        col
            .integer("recipe_id")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("recipes")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        col
            .integer("ingredient_id")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("ingredients")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        col 
            .integer("ingredient_qty")
            .notNullable()  
        })
        

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("recipes");
    return knex.schema.dropTableIfExists("ingredients");
    return knex.schema.dropTableIfExists("steps");
    return knex.schema.dropTableIfExists("shoppingCart");
};
