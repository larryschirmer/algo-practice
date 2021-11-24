const gridTraveler = (rowAmt: number, colAmt: number, store: { [key: string]: number } = {}) => {
  if (rowAmt === 0 || colAmt === 0) return 0;
  if (rowAmt === 1 && colAmt === 1) return 1;
  if (`${rowAmt},${colAmt}` in store) return store[`${rowAmt},${colAmt}`];

  store[`${rowAmt},${colAmt}`] =
    gridTraveler(rowAmt - 1, colAmt, store) + gridTraveler(rowAmt, colAmt - 1, store);

  return store[`${rowAmt},${colAmt}`];
};

gridTraveler(1, 1);
