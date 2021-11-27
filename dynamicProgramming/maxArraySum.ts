export {};

const maxArraySum = (
  subset: number[],
  sum: number,
  maxFound: number,
  numbers: number[],
  store: { [key: number]: number[] } = {},
): { sum: number; subset: number[] } => {
  let max = maxFound;
  if (sum < max) return { sum: max, subset: store[max] };
  if (numbers.length === 0) return { sum: 0, subset: [] };
  if (sum in store) return { sum, subset: store[sum] };

  let bestSet: { sum: number; subset: number[] } = { subset, sum };
  for (let [numberIdx, number] of numbers.entries()) {
    if (subset.includes(numbers[numberIdx - 1])) continue;
    if (subset.includes(number)) continue;
    if (subset.includes(numbers[numberIdx + 1])) continue;

    let newSubset = [...subset, number];
    let newSum = sum + number;
    if (newSum < max) continue;
    if (newSum in store) {
      if (newSum > bestSet.sum) bestSet = { sum: newSum, subset: store[newSum] };
      continue;
    }

    let { sum: foundSum, subset: foundsubset } = maxArraySum(newSubset, newSum, max, numbers, store);
    store[foundSum] = foundsubset;
    if (foundSum > bestSet.sum) bestSet = { sum: foundSum, subset: foundsubset };
  }

  return bestSet;
};

maxArraySum([], 0, 0, [-1, 1]); //?
maxArraySum([], 0, 0, [-2, 1, 3, -4, 5]); //?
maxArraySum([], 0, 0, [3, 7, 4, 6, 5]); //?
maxArraySum([], 0, 0, [2, 1, 5, 8, 4]); //?
maxArraySum([], 0, 0, [3, 5, -7, 8, 10]); //?
maxArraySum([], 0, 0, [1, 2, 3]); //?
