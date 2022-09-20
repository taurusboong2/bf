import { pullAt } from '../lib/pullAt';

describe('pullAt', () => {
  it('removes elements from array corresponding to indexes and returns an array of removed elements', () => {
    const testArr = ['a', 'b', 'c', 'd'];
    expect(pullAt(testArr, [0, 1])).toStrictEqual(['a', 'b']);
  });

  // test('if the value of the second argument is greater than index, an error occurs.', () => {
  //   const testArr = ['이재붕', '송민석', '김대희', '한상준', '김재웅'];
  //   const errorTest = pullAt(testArr, [1, 5]);
  //   expect(errorTest).toThrowError('index Error!');
  // });
});
