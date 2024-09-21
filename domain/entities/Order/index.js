const buildMakeOrder = require('./buildMakeOrder');
const orderValidator = require('./orderValidator');

let makeOrder = buildMakeOrder(orderValidator);

module.exports = makeOrder;
