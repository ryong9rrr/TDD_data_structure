class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }

  push(value) {
    this.last = new Node(value, this.last);
    this.size++;
  }

  pop() {
    if (!this.last) return null;
    const extracted = this.last.value;
    this.last = this.last.next;
    this.size--;
    return extracted;
  }
}

module.exports = Stack;
