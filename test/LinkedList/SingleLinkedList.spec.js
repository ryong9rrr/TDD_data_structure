const { describe, should } = require("../../.bin/common.js");
const SingleLinkedList = require("../../js/LinkedList/SingleLinkedList.js");

function test_SingleLinkedList() {
  describe("<싱글연결리스트 테스트>", () => {
    describe("1. <append 테스트>", () => {
      const singleList = new SingleLinkedList();

      describe("연결리스트에 1, 2, 3을 추가한다.", () => {
        singleList.append(1);
        singleList.append(2);
        singleList.append(3);

        should(singleList.size, 3);
        should(singleList.display, "[1, 2, 3]");
      });
    });

    describe("2. <find> 테스트", () => {
      const singleList = new SingleLinkedList();

      describe("비어있는 리스트에서 1을 찾는다.", () => {
        should(singleList.find(1), -1);
      });

      describe("1을 추가한 후 1을 찾는다.", () => {
        singleList.append(1);
        const targetNode = singleList.find(1);
        should(targetNode.value, 1);
      });

      describe("2, 3을 추가한 후 3을 찾는다.", () => {
        singleList.append(2);
        singleList.append(3);
        const targetNode = singleList.find(3);
        should(targetNode.value, 3);
      });

      describe("100을 찾는다. (존재하지 않는 값)", () => {
        should(singleList.find(100), -1);
      });
    });

    describe("3. <remove> 테스트", () => {
      const singleList = new SingleLinkedList();

      describe("빈 리스트에서 remove", () => {
        should(singleList.remove(1), -1);
      });

      singleList.append(4);
      singleList.append(1);
      singleList.append(2);
      singleList.append(3);

      describe("4를 지운다.", () => {
        singleList.remove(4);
        should(singleList.size, 3);
        should(singleList.display, "[1, 2, 3]");
      });

      describe("존재하지 않는 100을 지운다.", () => {
        should(singleList.remove(100), -1);
        should(singleList.size, 3);
        should(singleList.display, "[1, 2, 3]");
      });

      describe("2를 지운다.", () => {
        singleList.remove(2);
        should(singleList.size, 2);
        should(singleList.display, "[1, 3]");
      });

      describe("3을 지운다.", () => {
        singleList.remove(3);
        should(singleList.size, 1);
        should(singleList.display, "[1]");
      });
    });

    describe("4. <insert> 테스트", () => {
      const singleList = new SingleLinkedList();
      singleList.append(1);
      singleList.append(2);
      singleList.append(3);

      describe("4를 100 뒤에 넣는다. (100은 존재하지 않음)", () => {
        const targetNode = singleList.find(100);
        should(singleList.insert(targetNode, 4), -1);
        should(singleList.size, 3);
        should(singleList.display, "[1, 2, 3]");
      });

      describe("4를 2 뒤에 넣는다.", () => {
        const targetNode = singleList.find(2);
        singleList.insert(targetNode, 4);
        should(singleList.size, 4);
        should(singleList.display, "[1, 2, 4, 3]");
      });

      describe("-1을 3 뒤에 넣는다.", () => {
        singleList.insert(singleList.find(3), -1);
        should(singleList.size, 5);
        should(singleList.display, "[1, 2, 4, 3, -1]");
      });

      describe("-2를 -1 뒤에 넣는다.", () => {
        singleList.insert(singleList.find(-1), -2);
        should(singleList.size, 6);
        should(singleList.display, "[1, 2, 4, 3, -1, -2]");
      });
    });
  });
}

module.exports = test_SingleLinkedList;
