export {};

const hasPrefix = (word: string, prefixes: string[]) => {
  for (let prefix of prefixes) if (word.indexOf(prefix) === 0) return true;
  return false;
};

const removePrefix = (word: string, prefix: string) => {
  if (!hasPrefix(word, [prefix])) return null;
  return word.slice(prefix.length);
};

const allContruct = (
  targetWord: string,
  words: string[],
  store: { [key: string]: string[][] } = {},
): string[][] | null => {
  if (targetWord in store) return store[targetWord];
  if (targetWord === '') return [[]];
  if (!hasPrefix(targetWord, words)) return null;

  let constructions = [];
  for (let word of words) {
    let target = removePrefix(targetWord, word);
    if (target === null) continue;

    store[target] = allContruct(target, words, store);
    if (store[target] !== null) {
      store[target].forEach(combination => {
        constructions.push([word, ...combination])
      })
    }
  }

  return constructions.reduce((flat, combination) => [...flat, combination], []);
};

allContruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']) //?
allContruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']); //?
allContruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']); //?
allContruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']); //?
