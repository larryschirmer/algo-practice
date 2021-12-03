export {};

const summingSquares = (target: number, store: { [key: number]: number } = {}) => {
  if (target === 0) return 0;
  if (target in store) return store[target];

  let minBranch = Infinity;
  for (let branchIdx = 1; Math.pow(branchIdx, 2) <= target; branchIdx++) {
    let newTarget = target - Math.pow(branchIdx, 2);
    store[newTarget] = summingSquares(newTarget, store);
    if (store[newTarget] < minBranch) minBranch = store[newTarget];
  }

  return minBranch + 1;
};

summingSquares(1); //?
summingSquares(8); //?
summingSquares(9); //?
summingSquares(12); //?
summingSquares(31); //?
summingSquares(50); //?
summingSquares(68); //?
summingSquares(87); //?
