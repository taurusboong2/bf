export const pull = (arr: any[], ...removeValues): any[] => {
  removeValues.forEach(removeValue => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === removeValue) {
        arr.splice(i, 1);
      }
    }
  });

  return arr;
};
