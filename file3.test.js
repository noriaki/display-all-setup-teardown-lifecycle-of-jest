const { appendFileSync } = require('fs');

appendFileSync(global.logPath, 'file3:beginning of file\n');

it('file3:test1', () => {
  appendFileSync(global.logPath, 'file3:beginning of test1\n');

  expect(1).toBe(1);

  appendFileSync(global.logPath, 'file3:end of test1\n');
});

beforeAll(() => {
  appendFileSync(global.logPath, 'file3:beforeAll at file scope\n');
});

beforeEach(() => {
  appendFileSync(global.logPath, 'file3:beforeEach at file scope\n');
});

afterAll(() => {
  appendFileSync(global.logPath, 'file3:afterAll at file scope\n');
});

afterEach(() => {
  appendFileSync(global.logPath, 'file3:afterEach at file scope\n');
});

appendFileSync(global.logPath, 'file3:end of file\n');
