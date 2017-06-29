
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("user", table => {
    table.increments("id");
    table.string("name");
    table.string("email").unique().notNull();
    table.timestamp("created_at").defaultTo(knex.fn.now()).notNull();
    table.boolean("is_active").defaultTo(true).notNull();
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};
