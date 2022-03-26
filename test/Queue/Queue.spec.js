const { describe, should } = require("../../.bin/common.js");
const SimpleQueue = require("../../js/Queue/SimpleQueue.js");
const Queue = require("../../js/Queue/Queue.js");

function test_Queue() {
  describe("<큐 테스트>", () => {
    describe("단위테스트", () => {
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

      describe("dequeue 테스트", () => {
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

    describe("전체 반복문 테스트", () => {
      const q = new Queue();
      let i = 0;
      while (i < 5) {
        q.enqueue(++i);
      }
      should(q.size, 5);
      let j = 0;
      while (q.size > 0) {
        should(q.dequeue(), ++j);
      }
      should(q.size, 0);
    });
  });
}

module.exports = test_Queue;
