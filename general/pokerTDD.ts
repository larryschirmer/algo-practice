export {};

const assert = (isTrue: boolean): Error | void => {
  if (!isTrue) throw new Error();
};

type Hand = [string, string, string, string, string];
const values = '_23456789TJQKA';

const isInHand = (value: string) => (card: string) => {
  if (card === '10') return 'T' === value;
  return card === value;
};

const cardValue = (card: string) => {
  if (card === '10') return values.indexOf('T');
  return values.indexOf(card);
};

const sum = (numbers: number[]) => numbers.reduce((sum, val) => sum + val, 0);

const playHand = (hands: Hand[]): number => {
  const cardValues = values.split('');
  let bestofHands = [];

  hands.forEach((hand, handIdx) => {
    // high card
    let highCard = Math.max(...hand.map(cardValue));
    bestofHands[handIdx] = highCard;

    // best pair
    let bestPair = cardValues.reduce<number>((pairVal, value) => {
      const instancesOfValue = hand.filter(isInHand(value)).length;
      if (instancesOfValue >= 2) return values.indexOf(value);
      return pairVal;
    }, 0);
    if (bestPair !== 0) bestofHands[handIdx] = bestPair * 10;

    // best two pair
    let bestTwoPair = cardValues.reduce<[number, number]>(
      (pairVal, value) => {
        const instancesOfValue = hand.filter(isInHand(value)).length;
        if (instancesOfValue >= 2) {
          const [, secondBest] = pairVal;
          return [secondBest, values.indexOf(value)];
        }
        return pairVal;
      },
      [0, 0],
    );
    if (bestTwoPair.every((val) => val !== 0)) bestofHands[handIdx] = sum(bestTwoPair) * 100;

    // best three of a kind
    let bestThree = cardValues.reduce<number>((pairVal, value) => {
      const instancesOfValue = hand.filter(isInHand(value)).length;
      if (instancesOfValue >= 3) return values.indexOf(value);
      return pairVal;
    }, 0);
    if (bestThree !== 0) bestofHands[handIdx] = bestThree * 1_000;

    // best straight
    let bestStraight = 0;
    const isStraight = hand
      .map(cardValue)
      .sort((a, b) => a - b)
      .filter((val, valIdx, arr) => {
        if (valIdx === arr.length - 1) return true;
        return arr[valIdx + 1] - 1 === val;
      });
    if (isStraight.length === 5) bestStraight = isStraight[4];
    if (bestStraight !== 0) bestofHands[handIdx] = bestStraight * 10_000;

    // best full house - best three and two of a kind
    let bestFullHouse = cardValues.reduce<{ [key: number]: number }>((combinations, value) => {
      const instancesOfValue = hand.filter(isInHand(value)).length;

      if (instancesOfValue === 3 && combinations[3] === undefined)
        combinations[3] = values.indexOf(value);
      if (instancesOfValue === 2 && combinations[2] === undefined)
        combinations[2] = values.indexOf(value);

      return combinations;
    }, {});
    if (Object.keys(bestFullHouse).length === 2)
      bestofHands[handIdx] = sum([bestFullHouse[3], bestFullHouse[2]]) * 100_000;
  });

  if (bestofHands.every((hand) => bestofHands[0] === hand)) return -1;
  return bestofHands.indexOf(Math.max(...bestofHands));
};

// tie
assert(
  playHand([
    ['A', '4', '5', '8', 'A'],
    ['4', '5', '8', 'A', 'A'],
  ]) === -1,
);

// player 0 wins high card
assert(
  playHand([
    ['2', '4', '5', '8', 'A'],
    ['4', '5', '8', '3', 'Q'],
  ]) === 0,
);

// player 1 wins pair
assert(
  playHand([
    ['2', '4', '5', '8', 'A'],
    ['Q', 'Q', '5', '3', 'T'],
  ]) === 1,
);

// player 0 wins two pair
assert(
  playHand([
    ['7', '10', 'J', '10', 'J'],
    ['Q', 'Q', '5', '3', '10'],
  ]) === 0,
);

// player 1 wins three of a kind
assert(
  playHand([
    ['7', 'A', 'J', 'A', 'J'],
    ['8', '8', '8', 'K', '4'],
  ]) === 1,
);

// player 0 wins straight
assert(
  playHand([
    ['8', 'J', '10', '9', 'Q'],
    ['8', '8', '8', 'K', '4'],
  ]) === 0,
);

// player X wins flush
// expand datastucture to include suits

// player 0 wins full house
assert(
  playHand([
    ['J', 'J', 'J', '8', '8'],
    ['8', 'J', '10', '9', 'Q'],
  ]) === 0,
);

// player 1 wins four of a kind
assert(
  playHand([
    ['J', 'J', 'J', '8', '8'],
    ['Q', 'Q', 'Q', 'Q', '4'],
  ]) === 1,
);

// player X wins straight flush
// expand datastucture to include suits

// player X wins royal flush
// expand datastucture to include suits
