import { last } from '../';

describe('last', () => {
  it('returns the last element of an array.', () => {
    const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(last(testArr)).toBe(10);
  });

  it('is another array case', () => {
    const testArr = ['이', '재', '붕'];
    expect(last(testArr)).toBe('붕');
  });
});
