import { add } from '../lib/add';

describe('add', () => {
  it('should add numbers', () => {
    expect(add(4, 5)).toBe(9);
  });
});
