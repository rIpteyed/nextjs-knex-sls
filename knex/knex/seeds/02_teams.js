exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("teams")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("teams").insert([
        { id: 1, name: "team1", owner: 1 },
        { id: 2, name: "team2", owner: 2 },
        { id: 3, name: "team3", owner: 3 },
        { id: 4, name: "team4", owner: 4 },
      ]);
    });
};
