exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.integer("id").notNullable().primary();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.string("full_name");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("teams", function (table) {
      table.integer("id").notNullable().primary();
      table.string("name").notNullable();
      table.integer("owner").references("id").inTable("users").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("members", function (table) {
      table.integer("id").notNullable().primary();
      table.integer("user_id").references("id").inTable("users").notNullable();
      table.integer("team_id").references("id").inTable("teams").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("projects", function (table) {
      table.integer("id").notNullable().primary();
      table.string("name");
      table.integer("team_id").references("id").inTable("teams").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("devices", function (table) {
      table.integer("id").notNullable().primary();
      table.string("token");
      table.integer("user_id").references("id").inTable("users").notNullable();
      table
        .integer("project_id")
        .references("id")
        .inTable("projects");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("models", function (table) {
      table.integer("id").notNullable().primary();
      table.string("name");
      table
        .integer("project_id")
        .references("id")
        .inTable("projects")
        .notNullable();
      table.jsonb("model_object");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("apps", function (table) {
      table.integer("id").notNullable().primary();
      table.string("name");
      table.string("version");
      table
        .integer("project_id")
        .references("id")
        .inTable("projects")
        .notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("collaborators", function (table) {
      table.integer("id").notNullable().primary();
      table.integer("user_id").references("id").inTable("users").notNullable();
      table
        .integer("project_id")
        .references("id")
        .inTable("projects")
        .notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("users")
    .dropTable("teams")
    .dropTable("members")
    .dropTable("projects")
    .dropTable("devices")
    .dropTable("models")
    .dropTable("apps")
    .dropTable("collaborators");
};
