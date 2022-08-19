import { each } from './each';
import { ArrayIterator } from '../types/iterator';

export const map = <T, TResult>(f: ArrayIterator<T, TResult>, iterable: T[]): TResult[] => {
  const newIterable = [];
  each((i, index) => newIterable.push(f(i, index)), iterable);
  return newIterable;
};
