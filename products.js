const input = [1, 3, 9, 4];
// expected output: [108, 36, 12, 27]

function products(input){
  const output = [];

  for(let i = 0; i < input.length; i++){
    const value = input.filter((value, index) => index !== i)
      .reduce((acc, cur) => cur * acc);
    output.push(value);
  }

  return output;
}

const output = products(input);
console.log(output);