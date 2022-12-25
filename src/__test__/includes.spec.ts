import { includes } from '../';

describe('includes', () => {
  it('should check the given value is included', () => {
    const arr = [11, 22, 33, 44, 55];
    expect(includes(11, arr)).toBe(true);
    expect(includes(345, arr)).toBe(false);

    const collection = [{ a: 1 }, { b: 3 }, { c: 3 }, { d: 4 }];
    expect(includes({ a: 1 }, collection)).toBe(true);
    expect(includes({ e: 5 }, collection)).toBe(false);
    expect(includes('string', collection)).toBe(false);
  });
});
