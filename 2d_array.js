
function zeroArray(arr) {
  const newArr = [];
  for(let i=0; i<arr.length; i++) {
    newArr.push(arr[i].slice());
  }

  for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr.length; j++) {
      if(arr[i][j] === 0) {
        clear(newArr, i, j);
      }
    }
  }
  return newArr;
}

function clear(arr, i, j) {
  // clear rows
  for(let m=0; m<arr.length; m++) {
    arr[i][m] = 0;
  }

  // clear cols
  for(let n=0; n<arr.length; n++) {
    arr[n][j] = 0;
  }
}

const input = [[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

const output = zeroArray(input);
console.log(output);