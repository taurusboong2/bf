export const dropRight = (arr: any[], n = 1): any[] => {
  const reversed = arr.reverse();
  const result = reversed.splice(0 + n, arr.length - 1).reverse();
  return result;
};
