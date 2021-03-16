import * as knex from "knex";

const DataAccess = {
  knex: null,
  // ensure that knex has been initialized, if so, move on, otherwise initialize it.
  friskInit: async ({ HOST, USER, PASSWORD, DATABASE }) => {
    if (!DataAccess.knex) {
      DataAccess.knex = await knex({
        client: "pg",
        version: "7.2",
        connection: {
          host: HOST || "nextjs-sls.cnydiajghvoc.us-east-1.rds.amazonaws.com",
          user: "postgres",
          password: PASSWORD || "1l2r3j4p",
          database: DATABASE || "nextjssls",
        },
      });
    }
  },

  listProjects: async () => {
    return await DataAccess.knex.select("id", "name").table("projects");
  },

  listDevices: async () => {
    return DataAccess.knex
      .select(
        "devices.id",
        "token",
        "user_id",
        "project_id",
        "full_name",
        "projects.name as name"
      )
      .join("users", "user_id", "=", "users.id")
      .leftJoin("projects", "project_id", "=", "projects.id")
      .table("devices")
      .orderByRaw("devices.id ASC");
  },

  addDevices: async (device) => {
    if (device.project_id < 0) delete device.project_id;
    const devices = await DataAccess.knex("devices").max("id as maxId").first();
    return await DataAccess.knex("devices").insert({
      ...device,
      id: devices.maxId + 1,
    });
  },

  deleteDevices: async (id) => {
    return DataAccess.knex("devices").where({ id }).del();
  },

  updateDevices: async (id, device) => {
    return DataAccess.knex("devices").where({ id }).update(device);
  },
};

export default DataAccess;
