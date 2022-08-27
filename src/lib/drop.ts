export const drop = (arr: any[], n = 1): any[] => {
  return arr.splice(0 + n, arr.length - 1);
};
