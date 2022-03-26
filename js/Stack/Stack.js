class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(newValue) {
    this.top = new Node(newValue, this.top);
    this.size++;
  }

  pop() {
    if (!this.top) return null;
    const extracted = this.top.value;
    this.top = this.top.next;
    this.size--;
    return extracted;
  }
}

module.exports = Stack;
