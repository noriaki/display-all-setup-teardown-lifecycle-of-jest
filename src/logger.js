const createLogger = require('debug');

createLogger.useColors = () => true;

module.exports = createLogger;
