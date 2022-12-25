import { range } from '../';

describe('range', () => {
  it('creates an array containing the values ​​up to the argument passed in.', () => {
    expect(range(10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('if there is a second argument, the first element starts with the second argument.', () => {
    expect(range(100, 95)).toStrictEqual([95, 96, 97, 98, 99, 100]);
  });
});
