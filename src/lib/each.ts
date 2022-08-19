export const each = <T>(f: (value: T, index: number) => void, iterable: T[]) => {
  let index = 0;
  for (const i of iterable) {
    f(i, index);
    index++;
  }
};
