import * as knex from "knex";

const DataAccess = {
  knex: null,
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
    return await DataAccess.knex
      .select("id", "token", "user_id", "project_id")
      .table("devices")
      .orderByRaw("id ASC");
  },

  addDevices: async (device) => {
    return await DataAccess.knex("devices").insert(device);
  },

  deleteDevices: async (id) => {
    return DataAccess.knex("devices").where({id}).del();
  },

  updateDevices: async (id, device) => {
    return DataAccess.knex("devices").where({id}).update(device);
  },
};

export default DataAccess;
