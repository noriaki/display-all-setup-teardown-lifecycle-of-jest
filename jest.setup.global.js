const { resolve } = require('path');
const { writeFileSync } = require('fs');

module.exports = async () => {
  global.logPath = resolve('jest.console.log');
  writeFileSync(global.logPath, 'globalSetup\n');
};
