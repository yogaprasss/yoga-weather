const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const alphabetUpperCase = alphabet.map((item) => item.toUpperCase());

export const encryptText = (text) => {
  return text.split('').map((item) => {
    let comparisonArray = [];
    if (alphabetUpperCase.includes(item)) comparisonArray = alphabetUpperCase;
    else if (alphabet.includes(item)) comparisonArray = alphabet;
    else if (item === ' ') return '.';
    else return item;
    const index = comparisonArray.findIndex((char) => char === item);
    return comparisonArray[(index + 11) % 26];
  }).join('');
};

export const decryptText = (text) => {
  return text.split('').map((item) => {
    let comparisonArray = [];
    if (alphabetUpperCase.includes(item)) comparisonArray = alphabetUpperCase;
    else if (alphabet.includes(item)) comparisonArray = alphabet;
    else if (item === '.') return ' ';
    else return item;
    const index = comparisonArray.findIndex((char) => char === item);
    return comparisonArray[(index + 15) % 26];
  }).join('');
};

export const encryptNumber = (number) => {
  return `${number}`.split('').map((item) => {
    return `${(Number(item) + 7) % 10}`
  }).join('');
};

export const decryptNumber = (number) => {
  return `${number}`.split('').map((item) => {
    return `${(Number(item) + 3) % 10}`
  }).join('');
};
