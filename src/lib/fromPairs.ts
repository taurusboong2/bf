export const fromPairs = arr => {
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    result[arr[i][0]] = arr[i][1];
  }

  return result;
};
