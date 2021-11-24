const howSum = (targetSum: number, numbers: number[], store: { [key: number]: number[] } = {}) => {
  const addableNumbers = numbers.filter((number) => number <= targetSum);

  // handle base case
  if (!addableNumbers.length) return [];
  if (targetSum in store) return store[targetSum];

  // iterate
  for (let number of addableNumbers) {
    let target = targetSum - number;
    if (target === 0) {
      store[targetSum] = [number];
      return [targetSum];
    }

    store[target] = howSum(target, addableNumbers, store);
    if (store[target].length) return [...store[target], number];
  }

  return [];
};

howSum(7, [2, 3]); //?
howSum(7, [5, 3, 4, 7]); //?
howSum(7, [2, 4]); //?
howSum(8, [2, 3, 5]); //?
howSum(300, [7,14]) //?
