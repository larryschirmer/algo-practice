export {};

/**
 * Return the minimum amount of adjacent swaps to place all number
 * to one side or the other
 *
 * @param arr - A list of numbers either 0 or 1
 * @returns swap amount
 */
const binaryArraySwap = (arr: number[]): number => {
  let misplacedZeros = 0;
  let countLeft = 0;
  let misplacedOnes = 0;
  let countRight = 0;

  for (let [_, arrVal] of arr.reverse().entries()) {
    if (arrVal === 0) misplacedZeros += 1;
    else countLeft += misplacedZeros;
  }

  for (let [_, arrVal] of arr.entries()) {
    if (arrVal === 1) misplacedOnes += 1;
    else countRight += misplacedOnes;
  }

  return Math.min(countLeft, countRight);
};

binaryArraySwap([0, 0, 1, 0, 1, 0, 1, 1]); //?
binaryArraySwap([0, 1, 0, 1, 0]); //?
binaryArraySwap([1, 1, 1, 0, 1]); //?
