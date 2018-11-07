
const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.INITIAL_CAPACITY = 20;
    this.capacity = this.INITIAL_CAPACITY;
    this.start = memory.allocate(this.INITIAL_CAPACITY);
    this.length = 0;
  }

  // TODO: resizing
  push(val) {
    const newPtr = this.start + this.length;
    memory.set(newPtr, val);
    this.length++;
  }

  pop() {
    const lastElementPtr = this.start + this.length - 1;
    this.length--;
    return memory.get(lastElementPtr);
  }
}

function main() {
  const array = new Array();
  array.push(22);
  array.push(33);
  array.push(44);
  console.log(array.pop());
  console.log(array.pop());
}

main();