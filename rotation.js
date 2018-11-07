
function rotation(str, str2){

  for(let i = 0; i < str2.length; i++){
    const first = str2.slice(0, i);
    const second = str2.slice(i);
    if(str === second + first){
      return true;
    }
  }
  return false;
}

console.log(rotation('amazon', 'azonam'));
console.log(rotation('amazon', 'azonma'));