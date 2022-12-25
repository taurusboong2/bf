import { reorder } from '../';

describe('reOrder', () => {
  it('reordering given array', () => {
    const testArr = [5, 4, 3, 1, 2, 10, 9, 8, 7, 6];
    expect(reorder(testArr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
