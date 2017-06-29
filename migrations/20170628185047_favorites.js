
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("location", table =>{
    table.increments("id");
    table.string("name");
    table.integer("rating").defaultTo(1);
    table.float("latitude").notNull();
    table.float("longitude").notNull();
    table.integer("user_id").references("user.id").unsigned().onDelete("cascade");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("location");
};
