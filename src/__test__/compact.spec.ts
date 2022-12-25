import { compact } from '../';

describe('compact', () => {
  it('creates an array with all falsey values removed.', () => {
    const testArr = [0, 1, false, 2, '', 3];
    expect(compact(testArr)).toStrictEqual([1, 2, 3]);
  });
});
