const createNewOrder = require('../../../application/useCases/CreateOrder');
const listAllOrders = require('../../../application/useCases/ListAllOrders');

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

module.exports = {
	controlCreateNewOrder,
	controlListAllOrders,
};
