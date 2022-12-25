import { reduce } from '../';

describe('reduce', () => {
  it('should reduce iterable with accumulator', () => {
    const iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const resultWithInitValue = reduce((acc, current) => acc + current, iterable, 10);
    expect(resultWithInitValue).toBe(65);

    const result = reduce((acc, current) => acc + current, iterable);
    expect(result).toBe(55);
  });
});
