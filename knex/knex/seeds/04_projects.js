exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { id: 1, name: "Project 01", team_id: 2 },
        { id: 2, name: "Project 02", team_id: 3 },
        { id: 3, name: "Project 03", team_id: 3 },
        { id: 4, name: "Project 04", team_id: 3 },
      ]);
    });
};
