const basename = require('path').basename(global.basename, '.test.js');
const debug = require('../src/logger')(`jest:sequential:${basename}`);

const wait = require('../src/wait');

debug('beginning of file');

beforeAll(() => { debug('beforeAll'); });
beforeEach(() => { debug('beforeEach {%s}', global.getTestName()); });
afterAll(() => { debug('afterAll'); });
afterEach(() => { debug('afterEach {%s}', global.getTestName()); });

[100, 1, 900, 1, 1200, 1].map((delay, i) => {
  const no = i + 1;
  it(`test${no}`, async () => {
    debug('test%s (started)', no);
    expect(await wait(delay)).toBe(true);
    debug('test%s (finished)', no);
  });
});

debug('end of file');
