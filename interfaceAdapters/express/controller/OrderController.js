const { query } = require('express');
const createNewOrder = require('../../../application/useCases/CreateOrder');
const { listOrder } = require('../../../application/useCases/ListAllOrders');
const retrieveReport = require('../../../application/useCases/RetrieveReport');
const updateOrderForm = require('../../../application/useCases/UpdateOrderForm');
const updateReportValue = require('../../../application/useCases/UpdateReportValue');

async function controlCreateNewOrder(req, res) {
	let { SID } = req.body;
	if (!SID) {
		return res.status(400).json({
			error: 'bad request',
			message: 'SID is missing',
		});
	}

	try {
		const result = await createNewOrder.execute(SID);
		let out = { body: result, message: 'Order created' };
		res.status(200).json(out);
		return result;
	} catch (error) {
		console.log('error from controller', error.message);
		return res.status(500).json({ error: error.message });
	}
}

async function controlListAllOrders(req, res) {
	const { f, v } = req.query;
	try {
		const result = await listOrder.execute({ f, v });
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
		if (result === 1) {
			return res.status(400).json({
				error: 'bad request',
				message: 'invalid key submitted',
			});
		}
		console.log(result);
		return res.status(200).json({ body: result });
	} catch (error) {
		console.log('error from controller', error.message);
		return res.status(500).json({ error: error.message });
	}
}

async function controlRetrieveReport(req, res) {
	const { reportName, reportId, orderId, sid } = req.body;
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
			sid,
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

async function controlUpdateReportValue(req, res) {
	const { sid, orderId, reportId, reportName, field, value } = req.body;
	try {
		let result = await updateReportValue.execute({
			sid,
			reportId,
			reportName,
			orderId,
			field,
			value,
		});
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
	controlUpdateReportValue,
};
