const { appendFileSync } = require('fs');

appendFileSync(global.logPath, 'file1:beginning of file\n');

describe('file1:describe1', () => {
  appendFileSync(global.logPath, 'file1:beginning of describe1\n');

  it('file1:test1-1', () => {
    appendFileSync(global.logPath, 'file1:beginning of test1-1\n');

    expect(1-1).toBe(1-1);

    appendFileSync(global.logPath, 'file1:end of test1-1\n');
  });

  describe('file1:describe1-1', () => {
    appendFileSync(global.logPath, 'file1:beginning of describe1-1\n');

    it('file1:test1-1-1', () => {
      appendFileSync(global.logPath, 'file1:beginning of test1-1-1\n');

      expect(1-1-1).toBe(1-1-1);

      appendFileSync(global.logPath, 'file1:end of test1-1-1\n');
    });

    appendFileSync(global.logPath, 'file1:end of describe1-1\n');
  });

  it('file1:test1-3', () => {
    appendFileSync(global.logPath, 'file1:beginning of test1-3\n');

    expect(1-3).toBe(1-3);

    appendFileSync(global.logPath, 'file1:end of test1-3\n');
  });

  appendFileSync(global.logPath, 'file1:end of describe1\n');
});

describe('file1:describe2', () => {
  appendFileSync(global.logPath, 'file1:beginning of describe2\n');

  it('file1:test2-1', () => {
    appendFileSync(global.logPath, 'file1:beginning of test2-1\n');

    expect(2-1).toBe(2-1);

    appendFileSync(global.logPath, 'file1:end of test2-1\n');
  });

  appendFileSync(global.logPath, 'file1:end of describe2\n');
});

it('file1:test3', () => {
  appendFileSync(global.logPath, 'file1:beginning of test3\n');

  expect(3).toBe(3);

  appendFileSync(global.logPath, 'file1:end of test3\n');
});

beforeAll(() => {
  appendFileSync(global.logPath, 'file1:beforeAll at file scope\n');
});

beforeEach(() => {
  appendFileSync(global.logPath, 'file1:beforeEach at file scope\n');
});

afterAll(() => {
  appendFileSync(global.logPath, 'file1:afterAll at file scope\n');
});

afterEach(() => {
  appendFileSync(global.logPath, 'file1:afterEach at file scope\n');
});

appendFileSync(global.logPath, 'file1:end of file\n');
