exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("models")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("models").insert([
        { id: 1, name: "Model A", project_id: 1 },
        { id: 2, name: "Model B", project_id: 2 },
        { id: 3, name: "Model C", project_id: 3 },
        { id: 4, name: "Model D", project_id: 4 },
      ]);
    });
};
