class SimpleQueue {
  constructor() {
    this.queue = [];
    this.front = this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    if (this.size === 0) return null;

    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  get size() {
    return this.rear - this.front;
  }

  get peek() {
    return this.size === 0 ? null : this.queue[this.front];
  }
}

module.exports = SimpleQueue;
