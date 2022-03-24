const { LinkedList, Node } = require("./core.js");

class SingleLinkedList extends LinkedList {
  constructor() {
    super();
    this.head = null;
    this.tail = null;
  }

  // 연결리스트를 문자열 형태로 보여줍니다.
  get display() {
    let currentNode = this.head;
    let strings = "[";
    while (currentNode) {
      strings += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }
    if (strings.length > 3) {
      strings = strings.slice(0, strings.length - 2);
    }
    strings += "]";
    return strings;
  }

  // 연결리스트에서 value에 해당하는 첫번째 노드를 반환합니다.
  find(value) {
    // 노드가 비어있다면
    // 여기서 size까지 사용하는 것이 좋은지?
    if (this.head === null && this.size === 0) {
      return undefined;
    }

    let currentNode = this.head;
    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    // 해당하는 값이 있으면 반환하고 없으면 undefined
    return currentNode || undefined;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    // 연결리스트가 비어있는 경우
    // 여기서 size까지 사용하는 것이 좋은지?
    if (this.head === null && this.tail === null && this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.increase();
      return true;
    }

    // 연결리스트가 비어있지 않다면 tail에 Node를 추가
    // 여기서 size까지 사용하는 것이 좋은지?
    if (this.head && this.tail.next === null && this.size > 0) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.increase();
      return true;
    }
    // 그 외의 경우라면 Error, 이건 로직상의 문제니 throw
    throw new Error("노드를 추가하는 곳에서 에러가 발생했어요.");
  }

  insert(node, newValue) {
    //if (!node) throw new Error("해당하는 노드를 찾을 수 없어요.");
    if (!node) return false;
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
    this.increase();
    return true;
  }

  remove(value) {
    // 여기서 size까지 사용하는 것이 좋은지?
    if (this.head === null && this.size === 0) {
      //throw new Error("노드가 이미 비어있어서 제거할 노드가 없어요.");
      return false;
    }

    let prevNode = this.head;

    while (prevNode.next && prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode && prevNode.next) {
      prevNode.next = prevNode.next.next;
      this.decrease();
      return true;
    }

    //throw new Error("해당하는 값을 가지는 노드가 없어요.");
    return false;
  }
}

module.exports = SingleLinkedList;
