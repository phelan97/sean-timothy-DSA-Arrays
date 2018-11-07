
function removeChars(str, strOfChars) {
  const charSet = new Set();
  for(let c of strOfChars) {
    charSet.add(c);
  }

  let strBuf = '';
  for(let c of str) {
    if(!charSet.has(c)) {
      strBuf += c;
    }
  }

  return strBuf;
}

const input = 'Battle of the Vowels: Hawaii vs. Grozny';
const chars = 'aeiou';
console.log(removeChars(input, chars));

