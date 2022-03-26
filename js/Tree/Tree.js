class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = new Node(root);
  }
}

const tree = new Tree(1);

console.log(tree);
