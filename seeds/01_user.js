const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user").del()
    .then(function() {
      // Inserts seed entries
      return knex("user").insert([{
          "name": "Rob",
          "email": "rob@rob.com",
          "password": bcrypt.hashSync("robpassword"),
        },
        {
          "name": "Will",
          "email": "will@will.com",
          "password": bcrypt.hashSync("willpassword"),
        },
        {
          "name": "user",
          "email": "user@user.com",
          "password": bcrypt.hashSync("userpassword"),
        },
      ]);
    });
};
