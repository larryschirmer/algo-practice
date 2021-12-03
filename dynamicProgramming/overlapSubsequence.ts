export {};

const overlapSubsequence = (
  word1: string,
  word2: string,
  w1Idx = 0,
  w2Idx = 0,
  store: { [key: string]: number } = {},
): number => {
  if (w1Idx === word1.length || w2Idx === word2.length) return 0;
  if (`${w1Idx},${w2Idx}` in store) return store[`${w1Idx},${w2Idx}`];

  if (word1[w1Idx] === word2[w2Idx]) {
    let key = `${w1Idx + 1},${w2Idx + 1}`;
    store[key] = overlapSubsequence(word1, word2, w1Idx + 1, w2Idx + 1, store);
    return store[key] + 1;
  }

  const left = `${w1Idx + 1},${w2Idx}`;
  store[left] = overlapSubsequence(word1, word2, w1Idx + 1, w2Idx, store);
  const right = `${w1Idx},${w2Idx + 1}`;
  store[right] = overlapSubsequence(word1, word2, w1Idx, w2Idx + 1, store);

  return Math.max(store[left], store[right]);
};

overlapSubsequence('dogs', 'daogt'); //?
overlapSubsequence('xcyats', 'criaotsi'); //?
overlapSubsequence('xfeqortsver', 'feeeuavoeqr'); //?
overlapSubsequence('kinfolklivemustache', 'bespokekinfolksnackwave'); //?
overlapSubsequence(
  'mumblecorebeardleggingsauthenticunicorn',
  'succulentspughumblemeditationlocavore',
); //?
