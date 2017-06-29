const knex = require("./knex");

module.exports = {
  getUsers: function() {
    return knex("user");
  },
  getUser: function(user_id) {
    return knex("user").where("id", user_id).first();
  },
  getUserByEmail: function(user_email) {
    return knex("user").where("email", user_email).first();
  },
  createUser: function(newUser) {
    return knex("user").insert(newUser).returning("*");
  },
  getLocationByUser: function(user_id) {
    return knex("user").innerJoin("location", "user.id", "location.user_id").where("user.id", user_id);
  },
  addLocationByUser: function(location) {
    return knex("location").insert(location).returning("*");
  },
  deleteLocationByUser: function(local_id) {
    return knex("location").where("id", local_id).del();
  },
  getAllLocation: function() {
    return knex("location");
  },
  updateLocation: function(newRating, local_id) {
    return knex("location").update("rating", newRating).where("id", local_id);
  }
};
