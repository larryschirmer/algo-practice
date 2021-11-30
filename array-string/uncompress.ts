export {};

const uncompress = (input: string) => {
  let count = '';
  let result = [];

  let idx = 0;
  while (idx < input.length) {
    let char = input[idx]
    if (!parseInt(char)) {
      while (+count) {
        result.push(char);
        count = `${+count - 1}`
      }
    } else {
      count += char;
    }
    idx++;
  }

  return result.join('');
};

uncompress('2c3a1t'); //?
uncompress('4s2b'); //?
uncompress('2p1o5p'); //?
uncompress('3n12e2z'); //?
uncompress('127y'); //?
