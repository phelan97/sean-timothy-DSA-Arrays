function filter(array, callback){
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    const value = array[i];
    if(callback(value)) newArray.push(value);
  }
  return newArray;
}

const input = [1, 2, 3, 4, 5, 6, 7, 8];
const output = filter(input, value => value >= 5);
console.log(output);