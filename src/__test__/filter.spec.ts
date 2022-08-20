import { filter } from '../';

describe('filter', () => {
  it('should filter iterable with callback func', () => {
    const iterable = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    const result = filter(a => a.id > 3, iterable);
    expect(result.length).toBe(2);
    expect(result).toEqual([{ id: 4 }, { id: 5 }]);
  });
});
