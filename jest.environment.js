const { basename, resolve } = require('path');
const { appendFileSync } = require('fs');
const NodeEnvironment = require('jest-environment-node');

module.exports = class MyJestEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);

    this.global.basename = basename(context.testPath);
    this.global.logPath = resolve('jest.console.log');

    appendFileSync(this.global.logPath, `MyJestEnvironment#constructor in ${this.global.basename}\n`);

  }

  async setup() {
    appendFileSync(this.global.logPath, `MyJestEnvironment#setup in ${this.global.basename}\n`);

    await super.setup();
  }

  async teardown() {
    appendFileSync(this.global.logPath, `MyJestEnvironment#teardown in ${this.global.basename}\n`);

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
};
