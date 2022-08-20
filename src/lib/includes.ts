export const includes = (value, arr) => {
  let answer = false;
  const isParamsObj = typeof value === 'object';

  for (const elements of arr) {
    const isElemObj = typeof elements === 'object';

    if (isParamsObj && isElemObj && JSON.stringify(value) === JSON.stringify(elements)) {
      answer = true;
      break;
    }

    if (value === elements) {
      answer = true;
      break;
    }
  }

  return answer;
};
