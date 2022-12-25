import { average } from '../';

describe('average', () => {
  it('returns the average of an array', () => {
    const testArr = [1, 2, 3, 4];
    expect(average(testArr)).toBe(2.5);
  });

  it('is another array case', () => {
    expect(average([1, 10, 100, 1000])).toBe(277.75);
  });
});
