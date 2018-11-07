
function urlify(str) {
  let strBuf = "";
  for(let i=0; i<str.length; i++) {
    const currentChar = str.charAt(i);
    if(currentChar === ' ') {
      strBuf += '%20';
    } else {
      strBuf += currentChar;
    }
  }
  return strBuf;
}

const testStr = "www.thinkful.com /tauh ida parv een";
console.log(urlify(testStr));