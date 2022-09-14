export const range = (endNumber: number, startNumber?: number) => {
  const last = endNumber;
  let i = startNumber || 0;
  const arr = [];

  while (i <= last) {
    arr.push(i as never);
    i += 1;
  }
  return arr;
};
