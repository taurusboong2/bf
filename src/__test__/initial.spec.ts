import { initial } from '../lib/initial';

describe('initial', () => {
  it('gets all but the last element of array.', () => {
    const testArr = [1, 2, 3, 4];
    expect(initial(testArr)).toStrictEqual([1, 2, 3]);
  });

  test('another case', () => {
    const testArr = [1, 2, 3, 4, 5, 6, 7];
    expect(initial(testArr)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});
