const { describe, should } = require("../../.bin/common.js");
const Queue = require("../../js/Queue/Queue.js");

function test_Queue() {
  describe("<-----연결리스트 큐 테스트----->", () => {
    const q = new Queue();

    describe("큐가 비었을 때 size", () => {
      should(q.size, 0);
    });

    describe("큐가 비었을 때, 맨 앞에 요소 peek", () => {
      should(q.peek, null);
    });

    describe("1을 enqueue", () => {
      q.enqueue(1);
      should(q.size, 1);
      should(q.peek, 1);
    });

    describe("dequeue", () => {
      should(q.dequeue(), 1);
      should(q.size, 0);
      should(q.peek, null);
    });

    describe("큐가 비어있다면 dequeue는 null을 반환한다.", () => {
      should(q.dequeue(), null);
      should(q.size, 0);
      should(q.peek, null);
    });
  });
}

module.exports = test_Queue;
