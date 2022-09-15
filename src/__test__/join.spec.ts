import { join } from '../lib/join';

describe('join', () => {
  it('returns an array converted to a string. medium is the second argument', () => {
    const testArray = ['이', '재', '붕'];
    expect(join(testArray, '-')).toBe('이-재-붕');
  });

  test('if the second argument is omitted, it is separated by ","".', () => {
    const testArray = [1, 2, 3, 4];
    expect(join(testArray)).toBe('1,2,3,4');
  });
});
