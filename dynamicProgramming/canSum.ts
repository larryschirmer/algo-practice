const canSum = (targetSum: number, numbers: number[], store: { [key: number]: boolean } = {}) => {
  if (targetSum === 0) return true;
  if (targetSum in store) return store[targetSum];

  for (let number of numbers) {
    const target = targetSum - number;
    if (target < 0) return false;
    store[target] = canSum(target, numbers, store);
    if (store[target]) return true;
  }

  return false;
};

canSum(7, [2, 3]);
canSum(7, [5, 3, 4, 7]);
canSum(7, [2, 4]);
canSum(8, [2, 3, 5]);
canSum(300, [7, 14]);
