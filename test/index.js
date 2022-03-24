var SingleLinkedList = require("../js/LinkedLIst/SingleLinkedList.js");

function describe(title, fn) {
  let i = 0;
}

function test(fn, result) {
  return fn() == result;
}

const singleList = new SingleLinkedList();

singleList.append(1);
singleList.append(2);
singleList.append(3);
console.log(singleList);
console.log(singleList.size);
console.log(singleList.display);

singleList.insert(singleList.find(2), 4);

console.log(singleList.display);

singleList.remove(4);

console.log(singleList.display);

console.log(singleList.find(100));

// singleList.insert(singleList.find(100), 4) -> "해당하는 노드를 찾을 수 없어요."

// singleList.remove(singleList.find(100)) -> 해당하는 값을 가지는 노드가 없어요.

// 노드가 비어있는데 remove 하는 경우

// 굳이 size를 비교해줘야할까? (비교해주면 혹시 모를 로직 에러를 찾아낼 수 있을 것 같은데....)

// 테스트 코드 작성해야할듯?
