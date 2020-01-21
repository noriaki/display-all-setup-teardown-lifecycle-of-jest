console.log('file2:beginning of file');

describe('file2:describe1', () => {
  console.log('file2:beginning of describe1');

  it('file2:test1-1', () => {
    console.log('file2:beginning of test1-1');

    expect(1-1).toBe(1-1);

    console.log('file2:end of test1-1');
  });

  it('file2:test1-2', () => {
    console.log('file2:beginning of test1-2');

    expect(1-2).toBe(1-2);

    console.log('file2:end of test1-2');
  });

  describe('file2:describe1-1', () => {
    console.log('file2:beginning of describe1-1');

    it('file2:test1-1-1', () => {
      console.log('file2:beginning of test1-1-1');

      expect(1-1-1).toBe(1-1-1);

      console.log('file2:end of test1-1-1');
    });

    console.log('file2:end of describe1-1');
  });

  it('file2:test1-3', () => {
    console.log('file2:beginning of test1-3');

    expect(1-3).toBe(1-3);

    console.log('file2:end of test1-3');
  });

  console.log('file2:end of describe1');
});

describe('file2:describe2', () => {
  console.log('file2:beginning of describe2');

  it('file2:test2-1', () => {
    console.log('file2:beginning of test2-1');

    expect(2-1).toBe(2-1);

    console.log('file2:end of test2-1');
  });

  console.log('file2:end of describe2');
});

console.log('file2:end of file');
