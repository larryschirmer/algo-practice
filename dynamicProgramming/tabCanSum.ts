export {};

const tabCanSum = (targetSum: number, numbers: number[]): boolean => {
  let table = new Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let [valIdx, val] of table.entries()) {
    if (val === false) continue;

    for (let num of numbers) {
      if (valIdx + num <= targetSum) table[valIdx + num] = true;
    }
  }

  return table[targetSum];
};

tabCanSum(7, [2, 3]); //?
tabCanSum(7, [5, 3, 4, 7]); //?
tabCanSum(7, [2, 4]); //?
tabCanSum(8, [2, 3, 5]); //?
tabCanSum(300, [7, 14]); //?
