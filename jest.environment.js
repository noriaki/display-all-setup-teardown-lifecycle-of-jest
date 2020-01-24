const { basename } = require('path');
const debug = require('./src/logger')('jest:environment');
const NodeEnvironment = require('jest-environment-node');

module.exports = class MyEnv extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);

    this.global.basename = basename(context.testPath);

    debug('MyEnv#constructor in context of {%s}', this.global.basename);
  }

  async setup() {
    debug('MyEnv#setup in context of {%s}', this.global.basename);

    await super.setup();
  }

  async teardown() {
    debug('MyEnv#teardown in context of {%s}', this.global.basename);

    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
};
