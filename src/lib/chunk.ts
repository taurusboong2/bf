export const chunk = (array, size) => {
  const newArr = [];
  for (let i = 0; i <= array.length - 1 + size; i++) {
    newArr.push(array.splice(0, size) as never);
  }
  if (array.length > 0) {
    newArr.push(array as never);
  }
  return newArr;
};
