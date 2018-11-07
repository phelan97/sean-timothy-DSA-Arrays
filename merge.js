const input1 = [1, 3, 6, 8, 11];
const input2 = [2, 3, 5, 8, 9, 10];
// expected output: [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// i can hear you
function merge(array1, array2){
  const newArray = new Array(array1.length + array2.length);
  let i = 0;
  let j = 0;

  for(let m = 0; m < newArray.length; m++){
    if(i >= array1.length) newArray[m] = array2[j++];
    else if(j >= array2.length) newArray[m] = array1[i++];
    else if(array1[i] <= array2[j]) newArray[m] = array1[i++];
    else newArray[m] = array2[j++];
  }

  return newArray;
}

const output = merge(input1, input2);
console.log(output);