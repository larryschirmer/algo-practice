export {};

const arrayStepper = (arr: number[], idx = 0, store: { [key: number]: boolean } = {}): boolean => {
  if (idx === arr.length - 1) return true;
  if (idx >= arr.length) return false;
  if (idx in store) return store[idx];

  const current = arr[idx];
  if (current === 0) return false;

  for (let target = 1; target <= current; target++) {
    store[target + idx] = arrayStepper(arr, target + idx, store);
    if (store[target + idx] === true) return true;
  }
  return false;
};

arrayStepper([2, 4, 2, 0, 0, 1]); //?
arrayStepper([2, 3, 2, 0, 0, 1]); //?
arrayStepper([3, 1, 3, 1, 0, 1]); //?
arrayStepper([4, 1, 5, 1, 1, 1, 0, 4]); //?
arrayStepper([4, 1, 2, 1, 1, 1, 0, 4]); //?
arrayStepper([1, 1, 1, 1, 1, 0]); //?
arrayStepper([1, 1, 1, 1, 0, 0]); //?
arrayStepper([
  31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7,
  6, 5, 3, 2, 1, 0, 0, 0,
]); //?
