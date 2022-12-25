import { fill } from '../';

describe('fill', () => {
  it('fills elements of array with value from start up to, but not including, end', () => {
    const testArr = [1, 2, 3, 4];
    expect(fill(testArr, 2)).toStrictEqual([2, 2, 2, 2]);
  });

  test('', () => {
    expect(fill(Array(2), '*')).toStrictEqual(['*', '*']);
  });

  test('', () => {
    const testArr = [1, 2, 3, 4, 5, 6, 7];
    expect(fill(testArr, 1, 0, 2)).toStrictEqual([1, 1, 3, 4, 5, 6, 7]);
  });
});
