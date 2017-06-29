exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("location").del()
    .then(function() {
      // Inserts seed entries
      return knex("location").insert([{
          "name": "Galvanize",
          "latitude": 39.7578,
          "longitude": -105.0072,
          "user_id": 1
        },
        {
          "name": "Home",
          "latitude": 39.7573,
          "longitude": -105.0345,
          "user_id": 1
        },
        {
          "name": "Something",
          "latitude": 50,
          "longitude": 105.0345,
          "user_id": 1
        },
        {
          "name": "Galvanize",
          "latitude": 39.7578,
          "longitude": -105.0072,
          "user_id": 2
        },
        {
          "name": "Something",
          "latitude": -39.7578,
          "longitude": 105.0072,
          "user_id": 2
        },
        {
          "name": "Something2",
          "latitude": 80,
          "longitude": 80,
          "user_id": 2
        },
        {
          "name": "Something",
          "latitude": -75,
          "longitude": 23,
          "user_id": 3
        },
        {
          "name": "Something2",
          "latitude": 40,
          "longitude": -120,
          "user_id": 3
        },
        {
          "name": "Something3",
          "latitude": 90,
          "longitude": 90,
          "user_id": 3
        },
      ]);
    });
};
