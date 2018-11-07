
const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.INITIAL_CAPACITY = 2;
    this.capacity = this.INITIAL_CAPACITY;
    this.start = memory.allocate(this.INITIAL_CAPACITY);
    this.length = 0;
  }

  // TODO: resizing
  push(val) {
    if(this.length >= capacity) this.resize();
    const newPtr = this.start + this.length;
    memory.set(newPtr, val);
    this.length++;
  }

  pop() {
    if(this.length <= 0) return null;
    const lastElementPtr = this.start + this.length - 1;
    this.length--;
    return memory.get(lastElementPtr);
  }

  resize(){
    const oldStart = this.start;
    this.capacity = this.capacity * 2;
    this.start = memory.allocate(this.capacity);
    memory.copy(this.start, oldStart, this.length);
  }
}

function main() {
  const array = new Array();
  array.push(22);
  array.push(33);
  array.push(44);
  console.log(array.pop());
  console.log(array.pop());
  console.log(array.capacity);
  array.resize();
  console.log(array.capacity);
  console.log(array.pop());
  console.log(array.pop());
}

main();