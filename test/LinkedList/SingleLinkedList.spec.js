const { describe, should } = require("../common.js");
const SingleLinkedList = require("../../js/LinkedList/SingleLinkedList.js");

function temp() {
  console.log(singleList.display);

  // singleList.remove(singleList.find(100)) -> 해당하는 값을 가지는 노드가 없어요.

  // 노드가 비어있는데 remove 하는 경우

  // 굳이 size를 비교해줘야할까? (비교해주면 혹시 모를 로직 에러를 찾아낼 수 있을 것 같은데....)

  // 테스트 코드 작성해야할듯?
}

function test_SingleLinkedList() {
  describe("<싱글연결리스트 테스트>", () => {
    describe("1. <append 테스트>", () => {
      const singleList = new SingleLinkedList();

      describe("연결리스트에 1, 2, 3을 추가한다.", () => {
        singleList.append(1);
        singleList.append(2);
        singleList.append(3);

        // size는 3
        should(singleList.size, 3);
        // 출력
        should(singleList.display, "[1, 2, 3]");
      });
    });

    describe("2. <find> 테스트", () => {
      const singleList = new SingleLinkedList();

      singleList.append(1);
      singleList.append(2);
      singleList.append(3);

      should(singleList.find(100), undefined);
    });

    describe("3. <insert> 테스트", () => {
      const singleList = new SingleLinkedList();
      singleList.append(1);
      singleList.append(2);
      singleList.append(3);

      describe("4를 2 뒤에 넣는다.", () => {
        singleList.insert(singleList.find(2), 4);
        should(singleList.display, "[1, 2, 4, 3]");
      });

      describe("4를 100 뒤에 넣는다. (100은 존재하지 않음)", () => {
        should(singleList.insert(singleList.find(100), 4), false);
        should(singleList.display, "[1, 2, 4, 3]");
      });
    });

    describe("4. <remove> 테스트", () => {
      const singleList = new SingleLinkedList();
      singleList.append(4);
      singleList.append(1);
      singleList.append(2);
      singleList.append(3);

      describe("4를 지운다.", () => {
        singleList.remove(4);
        should(singleList.display, "[1, 2, 3]");
      });

      describe("100을 지운다. (100은 존재하지 않음)", () => {
        should(singleList.remove(100), false);
        should(singleList.display, "[1, 2, 3]");
      });

      describe("노드가 비어있는데 remove를 하는 경우", () => {
        should(singleList.display, "[1, 2, 3]");
        should(singleList.remove(1), true);
        console.log(singleList.display);
      });
    });
  });
}

module.exports = test_SingleLinkedList;
