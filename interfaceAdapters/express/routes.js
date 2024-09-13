const router = require('express').Router();
const {
	controlCreateNewOrder,
	controlListAllOrders,
} = require('./controller/OrderController');

// order routes: get
router.get('/list-all-orders', controlListAllOrders);

// order routes: post
router.post('/create-new-order', controlCreateNewOrder);

// router.post('/create-new-order', (req, res) => {
// 	res.send('route working');
// });

module.exports = router;
