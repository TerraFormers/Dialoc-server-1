const knex = require("./knex");

module.exports = {
  getUser: function(user_id) {
    return knex("user").where("id", user_id).first();
  },
};
