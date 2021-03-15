import DataAccess from "../../lib/data_access";

export default async function handler(req, res) {
  await DataAccess.friskInit(process.env);
  const projects = await DataAccess.listProjects();
  res.status(200).json(projects);
}
