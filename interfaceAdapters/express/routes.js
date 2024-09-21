const router = require('express').Router();
const {
	controlCreateNewOrder,
	controlListAllOrders,
	controlUpdateOrderForm,
	controlRetrieveReport,
	controlUpdateReportValue,
} = require('./controller/OrderController');

// order routes: get
router.get('/list-all-orders', controlListAllOrders);
router.get('/retrieve-report', controlRetrieveReport);

// order routes: post
router.post('/create-new-order', controlCreateNewOrder);
router.post('/update-order-form', controlUpdateOrderForm);
router.post('/update-report-value', controlUpdateReportValue);

// router.post('/create-new-order', (req, res) => {
// 	res.send('route working');
// });

module.exports = router;
