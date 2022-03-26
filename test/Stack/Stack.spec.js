const { describe, should } = require("../../.bin/common.js");
const Stack = require("../../js/Stack/Stack.js");

function test_Stack() {
  describe("<연결리스트 스택 테스트>", () => {
    const stack = new Stack();
    describe("push-pop 테스트", () => {
      let node = 0;
      while (node < 3) {
        stack.push(node++);
      }
      should(stack.size, 3);
      while (stack.size) {
        should(stack.pop(), --node);
      }
      should(stack.size, 0);
    });
  });
}

module.exports = test_Stack;
