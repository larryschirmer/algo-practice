export {};

const tabMaxArraySum = (arr: number[]) => {
  // create the table
  let table = new Array();
  table[0] = [];

  // loop through the arr numbers
  let loopIdx = -1;
  while (loopIdx <= arr.length || loopIdx <= table.length) {
    loopIdx++;
    if (table[loopIdx] === undefined) continue;
    for (let [arrIdx, arrVal] of arr.entries()) {
      let idx = arrVal + loopIdx;
      if (idx <= 0) continue;
      let adjacent = [arr[arrIdx], arr[arrIdx - 1] ?? null, arr[arrIdx + 1] ?? null];
      if (adjacent.some((adj) => table[loopIdx]?.includes(adj))) continue;

      table[idx] =
        table[idx] === undefined ? [...table[loopIdx], arrVal] : [...table[loopIdx], arrVal];
    }
  }
  // return table
  return table;
};

tabMaxArraySum([-2, 1, 3, -4, 5]); //?
tabMaxArraySum([3, 7, 4, 6, 5]); //?
tabMaxArraySum([2, 1, 5, 8, 4]); //?
tabMaxArraySum([3, 5, -7, 8, 10]); //?
tabMaxArraySum([1, 2, 3]); //?
