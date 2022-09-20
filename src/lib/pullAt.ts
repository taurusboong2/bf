export const pullAt = (arr: any[], removeArr: number[]) => {
  const result: any[] = [];

  removeArr.forEach(e => {
    if (e >= arr.length) {
      throw new Error('index Error!');
    }

    result.push(...arr.at(e));
  });

  return result;
};
