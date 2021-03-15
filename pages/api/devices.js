import DataAccess from "../../lib/data_access";

export default async function handler(req, res) {
	await DataAccess.friskInit(process.env);
	let result;
	if (req.method === "POST") {
		result = await DataAccess.addDevices(req.body);
	} else if (req.method === "PUT") {
		result = await DataAccess.updateDevices(req.body.id, req.body);
	} else if (req.method === "DELETE") {
		result = await DataAccess.deleteDevices(req.body.id);
	} else if (req.method === "GET") { // GET
		result = await DataAccess.listDevices();
	}
	res.status(200).json(result);
}
