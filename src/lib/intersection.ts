export const intersection = (...arr) => {
  const resultArray = [];
  for (const values of arr[0]) {
    for (const arrayValues of arr[1]) {
      if (values === arrayValues) {
        resultArray.push(values as never);
      }
    }
  }

  return resultArray;
};
