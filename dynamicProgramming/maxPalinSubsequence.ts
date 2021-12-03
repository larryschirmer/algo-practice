export {};

const maxPalinSubsequence = (word: string, store: { [key: string]: number } = {}): number => {
  let wordLen = word.length;
  if (wordLen <= 0) return 0;
  if (wordLen === 1) return 1;
  if (word.split('') === word.split('').reverse()) return wordLen;
  if (word in store) return store[word];

  if (word[0] === word[wordLen - 1]) {
    let target = word.slice(1, wordLen - 1);
    store[target] = maxPalinSubsequence(target, store);
    return 2 + store[target];
  }

  const left = word.slice(1);
  store[left] = maxPalinSubsequence(left, store);
  const right = word.slice(0, wordLen - 1);
  store[right] = maxPalinSubsequence(right, store);

  return Math.max(store[left], store[right]);
};

maxPalinSubsequence('luwxult'); //?
maxPalinSubsequence('xyzaxxzy'); //?
maxPalinSubsequence('lol'); //?
maxPalinSubsequence('boabcdefop'); //?
maxPalinSubsequence('z'); //?
maxPalinSubsequence('chartreusepugvicefree'); //?
maxPalinSubsequence('qwueoiuahsdjnweuueueunasdnmnqweuzqwerty'); //?
maxPalinSubsequence('enamelpinportlandtildecoldpressedironyflannelsemioticsedisonbulbfashionaxe'); //?
