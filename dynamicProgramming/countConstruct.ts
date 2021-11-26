export {};

const hasPrefix = (word: string, prefixes: string[]) => {
  for (let prefix of prefixes) if (word.indexOf(prefix) === 0) return true;
  return false;
};

const removePrefix = (word: string, prefix: string) => {
  if (!hasPrefix(word, [prefix])) return null;
  return word.slice(prefix.length);
};

const countContruct = (
  targetWord: string,
  words: string[],
  store: { [key: string]: number } = {},
) => {
  if (targetWord in store) return store[targetWord];
  if (targetWord === '') return 1;
  if (!hasPrefix(targetWord, words)) return 0;

  let sum = 0;
  for (let word of words) {
    const target = removePrefix(targetWord, word);
    if (target === null) continue;

    store[target] = countContruct(target, words, store);
    if (store[target] > 0) sum += store[target];
  }

  return sum;
};

countContruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']); //?
countContruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']); //?
countContruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']); //?
