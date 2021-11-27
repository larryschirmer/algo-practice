export {};

const bestSum = (targetSum: number, numbers: number[]) => {
  let table = new Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let [tableIdx, tableVal] of table.entries()) {
    if (tableVal === null) continue;
    for (let number of numbers) {
      let targetIdx = tableIdx + number;
      if (targetIdx > targetSum) continue;
      let current = [...tableVal, number];
      let prevBest = table[targetIdx]?.length ?? Infinity;
      if (current.length < prevBest) table[targetIdx] = current;
    }
  }
  return table[targetSum];
};

bestSum(7, [5, 3, 4, 7]); //?
bestSum(8, [2, 3, 5]); //?
bestSum(8, [1, 4, 5]); //?
bestSum(100, [1, 2, 5, 25]); //?
