const { appendFileSync } = require('fs');

appendFileSync(global.logPath, 'file2:beginning of file\n');

describe('file2:describe1', () => {
  appendFileSync(global.logPath, 'file2:beginning of describe1\n');

  it('file2:test1-1', () => {
    appendFileSync(global.logPath, 'file2:beginning of test1-1\n');

    expect(1-1).toBe(1-1);

    appendFileSync(global.logPath, 'file2:end of test1-1\n');
  });

  it('file2:test1-2', () => {
    appendFileSync(global.logPath, 'file2:beginning of test1-2\n');

    expect(1-2).toBe(1-2);

    appendFileSync(global.logPath, 'file2:end of test1-2\n');
  });

  describe('file2:describe1-1', () => {
    appendFileSync(global.logPath, 'file2:beginning of describe1-1\n');

    it('file2:test1-1-1', () => {
      appendFileSync(global.logPath, 'file2:beginning of test1-1-1\n');

      expect(1-1-1).toBe(1-1-1);

      appendFileSync(global.logPath, 'file2:end of test1-1-1\n');
    });

    appendFileSync(global.logPath, 'file2:end of describe1-1\n');
  });

  it('file2:test1-3', () => {
    appendFileSync(global.logPath, 'file2:beginning of test1-3\n');

    expect(1-3).toBe(1-3);

    appendFileSync(global.logPath, 'file2:end of test1-3\n');
  });

  appendFileSync(global.logPath, 'file2:end of describe1\n');
});

describe('file2:describe2', () => {
  appendFileSync(global.logPath, 'file2:beginning of describe2\n');

  it('file2:test2-1', () => {
    appendFileSync(global.logPath, 'file2:beginning of test2-1\n');

    expect(2-1).toBe(2-1);

    appendFileSync(global.logPath, 'file2:end of test2-1\n');
  });

  appendFileSync(global.logPath, 'file2:end of describe2\n');
});

appendFileSync(global.logPath, 'file2:end of file\n');
