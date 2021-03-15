exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("devices")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("devices").insert([
        { id: 1, token: "xyz123", user_id: 2, project_id: null },
        { id: 2, token: "xyz123", user_id: 1, project_id: 2 },
        { id: 3, token: "xyz123", user_id: 1, project_id: null },
        { id: 4, token: "xyz123", user_id: 4, project_id: 3 },
      ]);
    });
};
