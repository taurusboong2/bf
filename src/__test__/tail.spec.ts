import { tail } from '../lib/tail';

describe('tail', () => {
  it('gets all but the first element of array.', () => {
    const testArr = [1, 2, 3];
    expect(tail(testArr)).toStrictEqual([2, 3]);
  });
});
