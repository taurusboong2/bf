import { chunk } from '../';

describe('chunk', () => {
  it('creates an array of elements split into groups the length of second params', () => {
    const testArr = [1, 2, 3, 4];
    expect(chunk(testArr, 2)).toStrictEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it('if array can"t be split evenly, the final chunk will be the remaining elements', () => {
    const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(chunk(testArr, 3)).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11],
    ]);
  });

  it('is another array case', () => {
    const testArr = [1, 2, 3, 4, 5];
    expect(chunk(testArr, 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
  });
});
