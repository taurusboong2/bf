import { shuffle } from '../';

describe('shuffle', () => {
  test.skip('shuffle an array', () => {
    const arr1 = [1, 2, 3, 4, 5];
    expect(shuffle(arr1)).toStrictEqual([2, 1, 3, 5, 4]);
  });
});
