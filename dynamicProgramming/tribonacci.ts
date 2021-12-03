export {};

const tribonacci = (val: number, store: { [key: number]: number } = {}) => {
  if (val === 0 || val === 1) return 0;
  if (val === 2) return 1;
  if (val in store) return store[val];

  store[val] = tribonacci(val - 1, store) + tribonacci(val - 2, store) + tribonacci(val - 3, store);
  return store[val];
};

tribonacci(0); //?
tribonacci(1); //?
tribonacci(2); //?
tribonacci(5); //?
tribonacci(7); //?
tribonacci(14); //?
tribonacci(20); //?
tribonacci(37); //?
