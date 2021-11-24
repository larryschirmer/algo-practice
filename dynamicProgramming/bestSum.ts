const bestSum = (
  targetSum: number,
  numbers: number[],
  store: { [key: number]: number[] } = {},
): number[] | null => {
  if (targetSum in store) return store[targetSum];

  // exit case, no sum
  if (targetSum < Math.min(...numbers)) return null;

  const all: { arr: number[]; len: number }[] = [];
  for (let number of numbers) {
    let target = targetSum - number;
    // exit case, sum found
    if (target === 0) return [number];

    store[target] = bestSum(target, numbers, store);
    if (store[target] !== null) {
      let builtArr = [number, ...store[target]];
      all.push({ arr: builtArr, len: builtArr.length });
    }
  }

  return all.sort((a, b) => a.len - b.len)?.[0]?.arr ?? null;
};

bestSum(7, [5, 3, 4, 7]); //?
bestSum(8, [2, 3, 5]); //?
bestSum(8, [1, 4, 5]); //?
bestSum(100, [1, 2, 5, 25]); //?
