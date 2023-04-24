class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(listHead = null) {
    this.listHead = listHead;
  }

  prepend(value) {
    let previousHead = null;
    if (this.listHead !== null) previousHead = this.listHead;
    this.listHead = new Node(value);
    this.listHead.nextNode = previousHead;
  }

  append(value) {
    if (this.listHead === null) this.prepend(value);
    else {
      const node = new Node(value);
      const lastNode = this.tail();
      lastNode.nextNode = node;
    }
  }

  size() {
    let count = 0;
    let node = this.listHead;
    while (node) {
      count++;
      node = node.nextNode;
    }
    return count;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let lastNode = this.listHead;
    if (lastNode) {
      while (lastNode.nextNode) {
        lastNode = lastNode.nextNode;
      }
    }
    return lastNode;
  }

  at(index) {
    let indexNode = this.listHead;
    for (let i = 0; i < index; i++) {
      indexNode = indexNode.nextNode;
    }

    return indexNode;
  }

  pop() {
    let lastNode = this.listHead;
    let priorNode = null;
    if (lastNode) {
      while (lastNode.nextNode) {
        priorNode = lastNode;
        lastNode = lastNode.nextNode;
      }
    }
    priorNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.listHead;
    while (currentNode) {
      if (currentNode.value === value) return true;
      else currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currentNode = this.listHead;
    let count = 0;
    while (currentNode) {
      if (currentNode.value === value) return count;
      else {
        currentNode = currentNode.nextNode;
        count++;
      }
    }

    return null;
  }

  toString() {
    let currentNode = this.listHead;
    let stringList = "";
    while (currentNode) {
      stringList += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    return (stringList += "null");
  }

  insertAt(value, index) {
    let currentNode = this.listHead;
    let afterNode = currentNode.nextNode;
    let instertedNode = new Node(value);

    for (let i = 1; i < index; i++) {
      currentNode = currentNode.nextNode;
      afterNode = currentNode.nextNode;
    }

    currentNode.nextNode = instertedNode;
    instertedNode.nextNode = afterNode;

    return instertedNode;
  }

  removeAt(index) {
    let currentNode = this.listHead;
    let beforeNode = null;
    let afterNode = currentNode.nextNode;

    for (let i = 0; i < index; i++) {
      beforeNode = currentNode;
      currentNode = currentNode.nextNode;
      afterNode = currentNode.nextNode;
    }

    beforeNode.nextNode = afterNode;

    return currentNode;
  }
}

const list = new LinkedList();

list.append("a");
list.append("b");
list.prepend("qwe");
list.append("c");
list.append("d");

console.log(list.toString());
console.log(list.insertAt("abc", 1));
console.log(list.toString());
