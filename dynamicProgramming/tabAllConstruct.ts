export {};

const tabAllContruct = (targetString: string, words: string[]): string[][] => {
  const targetLength = targetString.length;
  let table = new Array<string[][]>(targetLength + 1).fill([]);
  table[0] = [[]];

  for (let [tableIdx, tableVal] of table.entries()) {
    if (tableVal.length === 0) continue;
    for (let word of words) {
      if (targetString.slice(tableIdx).indexOf(word) !== 0) continue;
      let targetIdx = tableIdx + word.length;
      if (targetIdx > targetLength) continue;

      table[targetIdx] = [...table[targetIdx], ...table[tableIdx].map((arr) => [...arr, word])];
    }
  }

  return table[targetLength];
};

tabAllContruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']); //?
tabAllContruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']); //?
tabAllContruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']); //?
tabAllContruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']); //?
