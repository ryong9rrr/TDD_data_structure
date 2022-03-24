class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  #size;
  constructor() {
    this.#size = 0;
  }

  get size() {
    return this.#size;
  }

  increase() {
    this.#size++;
  }

  decrease() {
    // 혹시모를 로직 에러에 대비한 코드
    if (this.#size === 0) {
      throw new Error("size가 0이라서 더이상 감소시킬 수 없어요.");
    }
    this.#size--;
  }
}

module.exports = {
  Node,
  LinkedList,
};
