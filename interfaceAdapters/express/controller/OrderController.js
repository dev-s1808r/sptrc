const createNewOrder = require('../../../application/useCases/CreateOrder');
const listAllOrders = require('../../../application/useCases/ListAllOrders');
const retrieveReport = require('../../../application/useCases/RetrieveReport');
const updateOrderForm = require('../../../application/useCases/UpdateOrderForm');

async function controlCreateNewOrder(req, res) {
	let { SID } = req.body;
	let { reportName } = req.body;
	if (!SID) {
		return res.status(400).json({
			error: 'bad request',
			message: 'SID is missing',
		});
	}
	if (!reportName) {
		return res.status(400).json({
			error: 'bad request',
			message: 'Report Name is missing',
		});
	}
	try {
		const result = await createNewOrder.execute(SID, reportName);
		console.log(result, 'from controller');
		res.status(200).json({ body: result });
		return result;
	} catch (error) {
		console.log('error from controller', error.message);
		return res.status(500).json({ error: error.message });
	}
}

async function controlListAllOrders(req, res) {
	try {
		const result = await listAllOrders.execute();
		console.log(result, 'from controller');
		res.status(200).json({ body: result });
	} catch (error) {
		console.log('Error from controller', error.message);
		return res.status(500).json({ error: error.message });
	}
}

async function controlUpdateOrderForm(req, res) {
	const { reportId, field, value } = req.body;
	if (!reportId) {
		return res.status(400).json({
			error: 'bad request',
			message: 'reportId is missing',
		});
	}
	if (!field) {
		return res.status(400).json({
			error: 'bad request',
			message: 'field is missing',
		});
	}
	if (!value) {
		return res.status(400).json({
			error: 'bad request',
			message: 'value is missing',
		});
	}
	try {
		const result = await updateOrderForm.execute(reportId, field, value);
		console.log(result);
		return res.status(200).json({ body: result });
	} catch (error) {
		console.log('error from controller', error.message);
		return res.status(500).json({ error: error.message });
	}
}

async function controlRetrieveReport(req, res) {
	const { reportName, reportId, orderId } = req.body;
	if (!reportName) {
		return res.status(400).json({
			error: 'bad request',
			message: 'reportName is missing',
		});
	}
	if (!reportId) {
		return res.status(400).json({
			error: 'bad request',
			message: 'reportId is missing',
		});
	}
	if (!orderId) {
		return res.status(400).json({
			error: 'bad request',
			message: 'orderId is missing',
		});
	}
	try {
		const result = await retrieveReport.execute({
			reportId,
			reportName,
			orderId,
		});
		console.log(result);
		if (!result) {
			return res.status(400).json({
				error: 'bad request',
				message: 'order and report mismatch',
			});
		}
		return res.status(200).json({ body: result });
	} catch (error) {
		console.log('error from controller', error.message);
		return res.status(500).json({ error: error.message });
	}
}

module.exports = {
	controlCreateNewOrder,
	controlListAllOrders,
	controlUpdateOrderForm,
	controlRetrieveReport,
};
