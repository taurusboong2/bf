import { ArrayIterator } from '../types/iterator';

export const each = <T, TResult>(f: ArrayIterator<T, TResult>, iterable: T[]) => {
  let index = 0;
  for (const i of iterable) {
    f(i, index);
    index++;
  }
};
