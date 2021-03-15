exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("apps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("apps").insert([
        { id: 1, name: "App 01", version: "0.1.11", project_id: 1 },
        { id: 2, name: "App 02", version: "0.1.10", project_id: 2 },
        { id: 3, name: "App 03", version: "0.1.10a", project_id: 3 },
        { id: 4, name: "App 04", version: "0.1.06", project_id: 4 },
      ]);
    });
};
