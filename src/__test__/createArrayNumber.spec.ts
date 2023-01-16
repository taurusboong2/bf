import { createArrayNumber } from '../';

describe('createArrayNumber', () => {
  it('create an array containing elements up to the values ​​passed as parameters', () => {
    expect(createArrayNumber(4)).toStrictEqual([0, 1, 2, 3, 4]);
    expect(createArrayNumber(10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
