exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("collaborators")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("collaborators").insert([
        { id: 1, user_id: 1, project_id: 1 },
        { id: 2, user_id: 1, project_id: 2 },
        { id: 3, user_id: 2, project_id: 3 },
        { id: 4, user_id: 4, project_id: 4 },
      ]);
    });
};
