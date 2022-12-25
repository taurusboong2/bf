import { concat } from '../';

describe('concat', () => {
  it('creates a new array concatenating array with any additional arrays and/or values.', () => {
    const testArr = [1, 2, 3, 4];
    expect(concat(testArr, 5, 6, 7)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('is another array case', () => {
    const testArr = [1, 2, 3];
    expect(concat(testArr, 4, [5], [6])).toStrictEqual([1, 2, 3, 4, [5], [6]]);
  });
});
