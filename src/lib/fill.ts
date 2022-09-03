export const fill = (arr, value, startIndex = 0, endIndex = arr.length) => {
  for (let i = 0; i < endIndex; i++) {
    const e = arr[i];
    if (typeof e === 'undefined') {
      arr.splice(i, 1);
    }
    arr.splice(startIndex + i, e - i, value);
  }

  return arr;
};
