const { basename } = require('path');
const NodeEnvironment = require('jest-environment-node');

module.exports = class MyJestEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);

    this.basename = basename(context.testPath);

    console.log(`MyJestEnvironment#constructor in ${this.basename}\n`);

  }

  async setup() {
    console.log(`MyJestEnvironment#setup in ${this.basename}\n`);

    await super.setup();
  }

  async teardown() {
    console.log(`MyJestEnvironment#teardown in ${this.basename}\n`);

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
};
