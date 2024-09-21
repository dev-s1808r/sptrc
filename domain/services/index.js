const { interfaceOrder, interfaceReport } = require('../../dataAccess');
const makeOrder = require('../entities/Order');
const orderSerializer = require('../serializers/orderSerializer');

const OrderServices = require('./OrderServices');
const ReportServices = require('./ReportService');

const reportValidator = require('./validations/reports');

const orderServices = new OrderServices({
	interfaceOrder,
	makeOrder,
	orderSerializer,
});

const reportServices = new ReportServices({
	interfaceReport,
	reportValidator,
});

module.exports = { orderServices, reportServices };
