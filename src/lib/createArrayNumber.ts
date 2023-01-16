export const createArrayNumber = n => {
  const arr = [...Array(n + 1).keys()];
  return arr;
};
