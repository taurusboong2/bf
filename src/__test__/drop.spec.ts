import { drop } from '../';

describe('drop', () => {
  it('creates a slice of array with n elements dropped from the beginning.', () => {
    const testArr = [1, 2, 3, 4];
    expect(drop(testArr, 2)).toStrictEqual([3, 4]);
  });

  test('if the second parameter is omitted, only the first index is removed and returned.', () => {
    const testArr = [1, 2, 3];
    expect(drop(testArr)).toStrictEqual([2, 3]);
  });

  test('if second parameter is bigger than first length of parameter, it returned empty array', () => {
    const testArr = [1, 2, 3];
    expect(drop(testArr, 7)).toStrictEqual([]);
  });
});
