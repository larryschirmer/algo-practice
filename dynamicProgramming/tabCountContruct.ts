export {};

const tabCountContruct = (targetString: string, words: string[]) => {
  const targetLength = targetString.length;
  let table = new Array<number>(targetLength + 1).fill(0);
  table[0] = 1;

  for (let [tableIdx, tableVal] of table.entries()) {
    if (tableVal === 0) continue;
    // loop over every word
    for (let word of words) {
      // check if the word is compatable
      if (targetString.slice(tableIdx).indexOf(word) !== 0) continue;
      // check if the word pushes index out of bounds
      let targetIdx = tableIdx + word.length;
      if (targetIdx > targetLength) continue;
      // copy current table val to target index
      table[targetIdx] += tableVal;
    }
  }

  return table[targetLength];
};

tabCountContruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']) //?
tabCountContruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']); //?
tabCountContruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']); //?
tabCountContruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']); //?
