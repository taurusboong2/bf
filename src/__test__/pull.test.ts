import { pull } from '../';

describe('pull', () => {
  it('removes all given values from array using SameValueZero for equality comparisons.', () => {
    const testArr = [1, 5, 1, 2, 3, 4, 5];
    expect(pull(testArr, 1, 5)).toStrictEqual([2, 3, 4]);
  });
});
