import { fromPairs } from '../';

describe('fromPairs', () => {
  it('', () => {
    const testArr = [
      ['a', 1],
      ['b', 2],
    ];
    expect(fromPairs(testArr)).toStrictEqual({ a: 1, b: 2 });
  });

  it('is another array case', () => {
    const testArr = [
      [1, 10],
      [2, 20],
      [3, 30],
    ];
    expect(fromPairs(testArr)).toStrictEqual({ 1: 10, 2: 20, 3: 30 });
  });
});
