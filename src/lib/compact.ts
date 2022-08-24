export const compact = array => {
  const falsy = false || null || undefined || 0 || NaN || '';

  const resultArr = [];

  for (const elements of array) {
    if (elements != falsy) {
      resultArr.push(elements as never);
    }
  }

  return resultArr;
};
