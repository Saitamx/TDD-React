describe('this is for group test cases', () => {
  it('descripcion', () => {
    expect(true).toBe(true);
  });
  it('descripcion 2', () => {
    expect(true).toBe(true);
  });

  it('descripcion 3', () => {
    expect(true).toBe(true);
  });
});

describe('marchers', () => {
  test('toBe', () => {
    expect(true).toBe(true);
  });
  test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
  test('object assignment', () => {
    const arr = ['one', 'two'];
    expect(arr).toEqual(['one', 'two']);
  });

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

  test('string', () => {
    expect('team').not.toMatch(/I/);
  });

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  test('thow', () => {
    // expect(() => compileAndroidCode()).toThrow();
    // expect(() => compileAndroidCode()).toThrow(Error);
    // // You can also use the exact error message or a regexp
    // expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    // expect(() => compileAndroidCode()).toThrow(/JDK/);
  });
});
