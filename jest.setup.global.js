const debug = require('./src/logger')('jest:global');

module.exports = async () => {
  debug('globalSetup');
};
