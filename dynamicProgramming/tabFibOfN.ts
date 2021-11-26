export {};

const tabFibOfN = (n: number) => {
  let table = new Array(n + 1).fill(0);
  table[1] = 1;

  return table.map((curr, idx) => {
    table[idx + 1] += curr;
    table[idx + 2] += curr;
    return curr;
  })[n];
};

tabFibOfN(6); //?
tabFibOfN(7); //?
tabFibOfN(8); //?
tabFibOfN(50); //?
