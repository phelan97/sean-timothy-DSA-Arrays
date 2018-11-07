
function maxSum(arr) {
  let currentSum = 0;
  let maxSum = 0;
  for(let i=0; i<arr.length; i++) {
    currentSum += arr[i];
    if(currentSum < 0) {
      currentSum = 0;
    } 
    if(currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

const arrA = [4,6,-3,5,-2,1];
console.log(maxSum(arrA));