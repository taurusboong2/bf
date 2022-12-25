import { dropRight } from '../';

describe('dropRight', () => {
  it('creates a slice of array with n elements dropped from the end.', () => {
    const testArr = [1, 2, 3, 4];
    expect(dropRight(testArr, 2)).toStrictEqual([1, 2]);
  });

  test('if the second parameter is omitted, only the last index is removed and returned.', () => {
    const testArr = [1, 2, 3];
    expect(dropRight(testArr)).toStrictEqual([1, 2]);
  });

  test('if second parameter is bigger than first length of parameter, it returned empty array', () => {
    const testArr = [1, 2, 3];
    expect(dropRight(testArr, 7)).toStrictEqual([]);
  });
});
