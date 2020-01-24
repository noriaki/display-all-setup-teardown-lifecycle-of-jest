const { appendFileSync } = require('fs');

appendFileSync(global.logPath, 'file99999:beginning of file\n');

it('file99999:test1', () => {
  appendFileSync(global.logPath, 'file99999:beginning of test1\n');

  expect(1).toBe(1);

  appendFileSync(global.logPath, 'file99999:end of test1\n');
});

beforeAll(() => {
  appendFileSync(global.logPath, 'file99999:beforeAll at file scope\n');
});

beforeEach(() => {
  appendFileSync(global.logPath, 'file99999:beforeEach at file scope\n');
});

beforeEach(() => {
  appendFileSync(global.logPath, 'file99999:beforeEach2 at file scope\n');
});

afterAll(() => {
  appendFileSync(global.logPath, 'file99999:afterAll at file scope\n');
});

afterEach(() => {
  appendFileSync(global.logPath, 'file99999:afterEach at file scope\n');
});

appendFileSync(global.logPath, 'file99999:end of file\n');
