export const reorder = (arr: any[]) => {
  const orders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return orders.map(order => arr[arr.indexOf(order)]);
};
