import { each } from './each';

export const reduce = (f, arr, initNum?) => {
  let result = 0;
  if (initNum) {
    result = initNum;
  }
  each(e => {
    result = f(result, e);
  }, arr);
  return result;
};
