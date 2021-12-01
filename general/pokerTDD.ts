export {};

const assert = (isTrue: boolean): Error | void => {
  if (!isTrue) throw new Error();
};

type Hand = [string, string, string, string, string];

const playHand = (hands: Hand[]): number => {
  const values = '23456789TJQKA';

  let bestofHands = [];

  hands.forEach((hand, handIdx) => {
    // high card
    let highCard = Math.max(...hand.map((card) => values.indexOf(card)));
    bestofHands[handIdx] = highCard;
  });

  if (bestofHands.every((hand) => bestofHands[0] === hand)) return -1;
  return bestofHands.indexOf(Math.max(...bestofHands)); //?
};

// tie
assert(
  playHand([
    ['A', '4', '5', '8', 'A'],
    ['4', '5', '8', 'A', 'A'],
  ]) === -1, //?
);

// player 0 wins high card
assert(
  playHand([
    ['2', '4', '5', '8', 'A'],
    ['4', '5', '8', '3', 'Q'],
  ]) === 0, //?
);

// player 1 wins pair
assert(
  playHand([
    ['2', '4', '5', '8', 'A'],
    ['Q', 'Q', '5', '3', 'T'],
  ]) === 1, //?
);

// player 0 wins two pair
assert(
  playHand([
    ['7', 'A', 'J', 'A', 'J'],
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
