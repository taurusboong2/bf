import { intersection } from '../lib/intersection';

describe('intersection', () => {
  it('', () => {
    const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(intersection(testArr, [3, 4, 5, 6, 9, 10])).toStrictEqual([3, 4, 5, 6, 9, 10]);
  });

  it('is another array case', () => {
    const testArr = [10, 100, 1000, 10000];
    expect(intersection(testArr, [10, 10000, 100000])).toStrictEqual([10, 10000]);
  });
});
