export {};

const tabGridTraveler = (rowAmt: number, colAmt: number) => {
  let table = new Array(rowAmt + 1).fill(0).map(() => new Array(colAmt + 1).fill(0));
  if (table[1]?.[1] !== undefined) table[1][1] = 1;

  for (let [rowIdx, row] of table.entries()) {
    for (let [colIdx] of row.entries()) {
      let curr = table[rowIdx][colIdx];

      if (rowIdx + 1 <= rowAmt) table[rowIdx + 1][colIdx] += curr;
      if (colIdx + 1 <= colAmt) table[rowIdx][colIdx + 1] += curr;
    }
  }

  return table[rowAmt][colAmt];
};

tabGridTraveler(0,0) //?
tabGridTraveler(1, 1); //?
tabGridTraveler(2, 3); //?
tabGridTraveler(3, 2); //?
tabGridTraveler(3, 3); //?
tabGridTraveler(18, 18); //?
