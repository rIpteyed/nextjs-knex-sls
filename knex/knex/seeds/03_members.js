exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("members")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("members").insert([
        { id: 1, user_id: 1, team_id: 2 },
        { id: 2, user_id: 1, team_id: 3 },
        { id: 3, user_id: 3, team_id: 3 },
        { id: 4, user_id: 3, team_id: 3 },
      ]);
    });
};
