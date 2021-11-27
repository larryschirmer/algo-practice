export {};

const tabCanConstruct = (targetString: string, words: string[]) => {
  const targetLength = targetString.length
  let table = new Array<boolean>(targetLength + 1).fill(false);
  table[0] = true;

  for (let [tableIdx, tableVal] of table.entries()) {
    if (tableVal === false) continue;
    for (let word of words) {
      let wordLen = word.length;
      let targetIdx = tableIdx + wordLen;

      if (targetString.slice(tableIdx).indexOf(word) !== 0) continue;
      if (targetIdx > targetLength) continue;
      table[targetIdx] = true;
    }
  }

  return table[targetLength];
};

tabCanConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']); //?
tabCanConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']); //?
tabCanConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']); //?
