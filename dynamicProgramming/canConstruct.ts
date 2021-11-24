const hasPrefix = (word: string, prefixes: string[]): boolean => {
  for (let prefix of prefixes) if (word.indexOf(prefix) === 0) return true;
  return false;
};

const removePrefix = (word: string, prefix: string): string | null => {
  if (hasPrefix(word, [prefix])) return word.slice(prefix.length)
  return null;
};

const canConstruct = (
  targetStr: string,
  words: string[],
  store: { [key: string]: boolean } = {},
) => {
  // handle base cases
  if (targetStr in store) return store[targetStr];
  if (targetStr === '') return true;
  if (!hasPrefix(targetStr, words)) return false;

  for (let word of words) {
    let target = removePrefix(targetStr, word);
    if (target === null) continue;
    store[target] = canConstruct(target, words, store);
    if (store[target] === true) return true;
  }

  return false;
};

canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']); //?
canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']); //?
canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']); //?
