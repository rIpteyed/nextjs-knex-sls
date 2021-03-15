exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          email: "test1@test.com",
          password: "8fhfa&&HFh9",
          full_name: "John Doe",
        },
        {
          id: 2,
          email: "test2@test.com",
          password: "8fhfa&&HFh9",
          full_name: "Jane Doe",
        },
        {
          id: 3,
          email: "test3@test.com",
          password: "8fhfa&&HFh9",
          full_name: "Danny Crew",
        },
        {
          id: 4,
          email: "test4@test.com",
          password: "8fhfa&&HFh9",
          full_name: "George Mandrake",
        },
      ]);
    });
};
