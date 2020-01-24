const basename = require('path').basename(global.basename, '.test.js');
const debug = require('../src/logger')(`jest:sequential:${basename}`);

const wait = require('../src/wait');

debug('beginning of file');

beforeAll(() => { debug('beforeAll'); });
beforeEach(() => { debug('beforeEach'); });
afterAll(() => { debug('afterAll'); });
afterEach(() => { debug('afterEach'); });

[100, 1, 1, 1, 1200, 1].map((delay, i) => {
  const no = i + 1;
  it(`test${no}`, async () => {
    debug('test%s (start)', no);
    expect(await wait(delay)).toBe(true);
    debug('test%s (end)', no);
  });
});

debug('end of file');
