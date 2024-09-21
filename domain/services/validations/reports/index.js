const hasField = require('./hasField');
const hasReport = require('./hasReport');

let reportValidator = {};

reportValidator.hasReport = hasReport;
reportValidator.hasField = hasField;

module.exports = reportValidator;
