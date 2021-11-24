export {};

const fib = (n: number, store: { [key: number]: number } = {}) => {
  if (n <= 2) return 1;
  if (store[n]) return store[n];

  store[n] = fib(n - 1, store) + fib(n - 2, store);
  return store[n];
};

fib(500);
