// model imports
const Order = require('../infra/mongoose/models/Order/Order');
const reports = require('../infra/mongoose/models/reports');

// repository imports
const MongoOrderRepository = require('../infra/mongoose/repository/MongoOrderRepository');
const MongoReportRepository = require('../infra/mongoose/repository/MongoReportRepository');

// interface imports
const InterfaceOrder = require('./InterfaceOrders');
const InterfaceReport = require('./InterfaceReports');

// misc imports
const throwError = require('../utilities/throwError');

const mongoOrderRepository = new MongoOrderRepository(Order, throwError);
const interfaceOrder = new InterfaceOrder(mongoOrderRepository);

const mongoReportRepository = new MongoReportRepository(reports, throwError);
const interfaceReport = new InterfaceReport(mongoReportRepository);

// console logging for debugging
// console.log(
// 	'testing import for report',
// 	mongoReportRepository,
// 	interfaceReport
// );

module.exports = {
	interfaceOrder,
	interfaceReport,
};
