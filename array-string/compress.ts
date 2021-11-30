export {};

const compress = (input: string) => {
  let char = '';
  let count = 0;
  let result = [];

  let idx = 0;
  while (idx <= input.length) {
    let current = input[idx];
    if (current !== char) {
      if (char === '') {
        char = current;
        count += 1;
      } else {
        if (count === 1) result.push(char);
        else result.push(`${count}${char}`);
        char = current;
        count = 1;
        1;
      }
    } else {
      count += 1;
    }
    idx++;
  }

  return result.join('');
};

compress('ccaaatsss'); //?
compress('ssssbbz');
compress('ppoppppp');
compress('nnneeeeeeeeeeeezz');
compress(
  'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
);
