export {};

const tabHowSum = (targetSum: number, numbers: number[]): number[] => {
  let table = new Array<number[] | null>(targetSum + 1).fill(null);
  table[0] = [];

  for (let [tableIdx, tableVal] of table.entries()) {
    if (tableVal === null) continue;
    for (let number of numbers) {
      if (tableIdx + number > targetSum) continue;
      table[tableIdx + number] = [...tableVal, number];
    }
  }

  return table[targetSum];
};

tabHowSum(7, [2, 3]); //?
tabHowSum(7, [5, 3, 4, 7]); //?
tabHowSum(7, [2, 4]); //?
tabHowSum(8, [2, 3, 5]); //?
tabHowSum(300, [7, 14]); //?
