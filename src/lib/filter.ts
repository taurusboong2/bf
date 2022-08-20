import { each } from './each';

export const filter = (f, arr) => {
  const result = [];
  each(e => {
    if (f(e)) {
      result.push(e);
    }
  }, arr);
  return result;
};
