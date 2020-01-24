const { appendFileSync, readFileSync } = require('fs');

module.exports = async () => {
  appendFileSync(global.logPath, 'globalTeardown\n');
  console.log(readFileSync(global.logPath, 'utf8'));
};
