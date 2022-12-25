import { head } from '../';

describe('head', () => {
  it('gets the first element of array', () => {
    expect(head([1, 2, 3])).toBe(1);
  });

  it('returns undefined with empty array', () => {
    expect(head([])).toBe(undefined);
  });
});
