import { deleteDuplicate } from '../';

describe('deleteDuplicate', () => {
  it('removes duplicate values in an array', () => {
    const testArr = [1, 5, 1, 2, 3, 4, 5];
    expect(deleteDuplicate(testArr)).toStrictEqual([2, 3, 4]);
  });
});
